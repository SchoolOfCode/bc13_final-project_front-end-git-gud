import Head from "next/head";
import { Inter } from "@next/font/google";
import Tabs from "../../components/Tabs";
import Content from "../../components/Content";
import NavigationPoint from "../../components/NavigationPoint";
import NewsFeed from "../../components/NewsFeed";
import { useAuth } from "../../context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export default function JobBoard() {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>LetChat | Dashboard</title>
        <meta
          name="description"
          content="Streamlined communication between tenants and landlords."
        />
        <meta name="author" content="Git Gud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content
        title={"42 Abbey Road, NW8 9AY"}
        navigation={<NavigationPoint />}
        newsfeed={
          <NewsFeed
            firstname={user.firstname}
            surname={user.surname}
            phonenumber={user.phonenumber}
            email={user.email}
          />
        }
        central={<Tabs />}
      />
    </>
  );
}
