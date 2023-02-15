import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import {
  DocumentMagnifyingGlassIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />

      <form className="flex flex-col items-center justify-center">
        <h1 className="text-7xl">MM Searchbar</h1>
        <div>
          <DocumentMagnifyingGlassIcon />
          <input type="text" />
          <MicrophoneIcon />
        </div>
      </form>
    </div>
  );
}