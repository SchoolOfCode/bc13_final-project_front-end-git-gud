import Head from "next/head";
import { Inter } from "@next/font/google";
import Container from "../components/Container";
import SignUser from "../components/Sign";

const inter = Inter({ subsets: ["latin"] });

export default function Sign() {
  return (
    <>
      <Head>
        <title>LetChat</title>
        <meta
          name="description"
          content="Streamlined communication between tenants and landlords."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container logo={true} images={true}>
        <SignUser />
      </Container>
    </>
  );
}
