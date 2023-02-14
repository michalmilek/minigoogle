import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const User = () => {
  const session = useSession();
  return <h1>user</h1>;
};

export default User;
