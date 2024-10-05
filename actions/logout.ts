import { signOut } from "next-auth/react";

export const logout = () => {
  // Some server stuff
  signOut();
}
