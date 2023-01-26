import Head from "next/head";
import { Inter } from "@next/font/google";
import { useState } from "react";
import Link from "next/link";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import Container from "../components/Container";
import ContentMain from "../components/ContentMain";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [login, setLogin] = useState(false);

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
      <Container logo={true}>
        {!login ? (
          <ContentMain
            title="The secure communication platform for landlords and tenants. "
            link={<Link href="/sign">Sign up</Link>}
            description="Easily share and store important documents while keeping all communication organized in one place. Say goodbye to the hassle of back-and-forth emails and phone calls."
          />
        ) : (
          //redirect to login page

          <h1>Redirect user to login page</h1>
        )}
      </Container>
      {/* <div className="absolute max-h-[100vh] top-[-10rem] right-0 opacity-40 -z-50 mb-10 xl:top-[-30rem]">
        <img
          src="/assets/images/bigPurpleHalf.png"
          className="mb-10 h-screen xl:h-[120vh]"
        />
      </div> */}
    </>
  );
}
