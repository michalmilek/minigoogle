import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();
  return (
    <h1>
      {session ? (
        <h1>User</h1>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </h1>
  );
};

export default User;
