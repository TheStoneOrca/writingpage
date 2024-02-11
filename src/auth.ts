import { Lucia } from "lucia";
import { NodePostgresAdapter } from "@lucia-auth/adapter-postgresql";
import pg from "pg";

const pool = new pg.Pool({
  user: "postgres",
  password: process.env.POSTGRESPASS,
  host: "localhost",
  database: "writing-site",
  port: 5432,
});

const adapter = new NodePostgresAdapter(pool, {
  user: "users",
  session: "user_session",
});

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    // this sets cookies with super long expiration
    // since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
    expires: false,
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes: any) => {
    return {
      username: attributes.username,
      email: attributes.email,
    };
  },
});

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
  }
}

interface DatabaseUserAttributes {
  username: string;
  email: string;
}
