import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {session ? (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt={session.user?.name!}
          className="h-[50px] w-[50px] object-cover rounded-full"
        />
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </>
  );
};

export default User;
