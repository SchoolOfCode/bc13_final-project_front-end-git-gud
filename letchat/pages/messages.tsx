import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Messages() {
  return (
    <>
      <Head>
        <title>LetChat | Messages</title>
        <meta name="description" content="Streamlined communication between tenants and landlords." />
        <meta name="author" content="Git Gud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline text-light-primary">
          LetChat Messages
        </h1>
      </main>
    </>
  );
}
