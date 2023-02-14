import Header from "@/components/Header";
import React from "react";
import { getProviders } from "next-auth/react";

const SignIn = ({ providers }: any) => {
  return (
    <>
      <Header />
      <div></div>
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
