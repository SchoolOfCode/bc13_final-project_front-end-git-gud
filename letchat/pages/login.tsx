import Head from "next/head";
import { Inter } from "@next/font/google";
import Container from "../components/Container";
import LogUser from "../components/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <>
      <Head>
        <title>
          LetChat | Streamlined communication between tenants and landlords
        </title>
        <meta
          name="description"
          content="Streamlined communication between tenants and landlords."
        />
        <meta name="author" content="Git Gud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="display">
        <Container logo={true} images={true}>
          <LogUser />
        </Container>
      </div>
    </>
  );
}
