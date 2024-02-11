"use server";

import pg from "pg";

export default async function pgCreator() {
  try {
    const db = new pg.Client({
      database: "writing-site",
      host: "localhost",
      user: "postgres",
      password: process.env.POSTGRESPASS,
      port: 5432,
    });
    await db.connect();
    return { database: db };
  } catch (error) {
    return { error: error };
  }
}
