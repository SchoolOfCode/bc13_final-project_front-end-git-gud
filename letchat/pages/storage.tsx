import Head from "next/head";
import { Inter } from "@next/font/google";
import { useAuth } from "../context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function Storage() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>LetChat | Document Storage</title>
        <meta
          name="description"
          content="Streamlined communication between tenants and landlords."
        />
        <meta name="author" content="Git Gud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </>
  );
}
