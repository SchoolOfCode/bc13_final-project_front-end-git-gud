import Head from "next/head";
import { Inter } from "@next/font/google";
import Content from "../../components/Content";
import NavigationPoint from "../../components/NavigationPoint";
import Messages from "../../components/Messages";
import { useAuth } from "../../context/AuthContext";
import NewsFeed from "../../components/NewsFeed";

const inter = Inter({ subsets: ["latin"] });

export default function JobBoard() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>LetChat | Job Board</title>
        <meta
          name="description"
          content="Streamlined communication between tenants and landlords."
        />
        <meta name="author" content="Git Gud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content
        title="Messages"
        navigation={<NavigationPoint />}
        central={<Messages />}
        newsfeed={
          <NewsFeed
            firstname={user.firstname}
            surname={user.surname}
            phonenumber={user.phonenumber}
            email={user.email}
          />
        }
      />
    </>
  );
}
