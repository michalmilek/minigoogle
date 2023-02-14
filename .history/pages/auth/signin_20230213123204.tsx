import Header from "@/components/Header";
import React from "react";
import { getProviders } from "next-auth/react";

const SignIn = ({ providers }: any) => {
  console.log(providers);
  return (
    <>
      <Header />
      <div>
        {Object.values(providers).map((provider): any => (
          <div key={provider.id}>
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt="google"
              className="w-[100px] h-[100px] object-cover"
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
