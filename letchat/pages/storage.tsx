import Head from "next/head";
import { Inter } from "@next/font/google";
import { useAuth } from "../context/AuthContext";
import { CardContainer } from "../utils";
import Content from "../components/Content";
import NavigationPoint from "../components/NavigationPoint";
import Tabs from "../components/Tabs";
import NewsFeed from "../components/NewsFeed";

const inter = Inter({ subsets: ["latin"] });

export default function Storage() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Streamlined communication between tenants and landlords."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Content
          title={"Storage"}
          navigation={<NavigationPoint />}
          newsfeed={<NewsFeed title={"News Feed"} />}
          central={<Tabs />}
          profile={
            <CardContainer
              firstname={user.firstname}
              surname={user.surname}
              phonenumber={user.phonenumber}
              email={user.email}
            />
          }
        />
      </main>
    </>
  );
}
