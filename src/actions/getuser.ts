import { lucia } from "@/auth";
import { cookies } from "next/headers";
import { cache } from "react";

const getUser = cache(async () => {
  const httpCookies = cookies();
  console.log(httpCookies.get("auth_session"));
});

export default getUser;
