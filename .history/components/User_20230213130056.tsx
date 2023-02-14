import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <h1>
      {session ? (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
        />
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </h1>
  );
};

export default User;
