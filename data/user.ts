import pgCreator from "@/actions/pgclientcreator";

export async function getUserByEmail(email: string) {
  try {
    const database = await pgCreator();
    if (database.error || !database.database) {
      return null;
    }

    const db = database.database;

    const user = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    return user.rows[0];
  } catch (error) {
    return null;
  }
}

export async function getUserByUsername(username: string) {
  try {
    const database = await pgCreator();
    if (database.error || !database.database) {
      return null;
    }

    const db = database.database;

    const user = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    return user.rows[0];
  } catch (error) {
    return null;
  }
}

export async function getUserById(id: number) {
  try {
    const database = await pgCreator();
    if (database.error || !database.database) {
      return null;
    }

    const db = database.database;

    const user = await db.query("SELECT * FROM users WHERE userid = $1", [id]);

    return user.rows[0];
  } catch (error) {
    return null;
  }
}
