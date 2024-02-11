"use server";

import pgCreator from "./pgclientcreator";

export default async function SignIn() {
  try {
    const db = await pgCreator();

    if (!db.database || db.error) {
      return { error: "Unexpected Server Error" };
    }
  } catch (error) {
    return { error: error };
  }
}
