import { createAuthClient } from "better-auth/react";
import { usernameClient } from "better-auth/client/plugins";
export const { signIn, signUp, useSession, signOut } = createAuthClient({
  baseURL: "https://linkzz-six.vercel.app",
  plugins: [usernameClient()],
  user: {
    fields: {
      username: true,
    },
  },
});
