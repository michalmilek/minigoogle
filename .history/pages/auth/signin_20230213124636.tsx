import Header from "@/components/Header";
import React from "react";
import { getProviders } from "next-auth/react";

const SignIn = ({ providers }: any) => {
  console.log(providers);
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center gap-10">
        <h1>App was made for learning purposes.</h1>
        {Object.values(providers).map((provider): any => (
          <div
            key={provider.id}
            className="flex items-center justify-center bg-slate-500 px-3 py-1 text-white">
            Login with
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt="google"
              className="w-[50px] h-[50px] object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SignIn;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
