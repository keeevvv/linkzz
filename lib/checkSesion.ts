import { headers } from "next/headers";
import { auth } from "./auth";

export const checkSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
};
