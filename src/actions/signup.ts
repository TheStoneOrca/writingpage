"use server";

import { getUserByEmail, getUserByUsername } from "../../data/user";
import bcrypt from "bcrypt";
import pgCreator from "./pgclientcreator";
import { lucia } from "@/auth";
import { cookies } from "next/headers";

export default async function SignUp(data: FormData) {
  try {
    const db = await pgCreator();

    if (!db.database || db.error) {
      return { error: "Unexpected Server Error!" };
    }

    const username = data.get("username");
    const password = data.get("password");
    const email = data.get("email");

    const checkEmail = await getUserByEmail(email as string);
    const checkUsername = await getUserByUsername(username as string);

    if (checkUsername || checkEmail) {
      return { error: "Username or Email already in use!" };
    }

    const hashedPassword = await bcrypt.hash(password as string, 10);

    const user = await db.database.query(
      "INSERT INTO users(username, password, email) VALUES($1, $2, $3) RETURNING *",
      [username, hashedPassword, email]
    );

    const session = await lucia.createSession(user.rows[0].userid, {});

    await db.database.end();

    return { success: true, sessionid: session.id };
  } catch (error) {
    console.log(error);
    return { error: error };
  }
}
