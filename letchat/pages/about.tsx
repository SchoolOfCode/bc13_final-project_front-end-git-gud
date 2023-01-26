import Head from "next/head";
import style from "../styles/About.module.scss";
import Container from "../components/Container";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>LetChat | About</title>
        <meta name="description" content="Streamlined communication between tenants and landlords." />
        <meta name="author" content="Git Gud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div id={style.aboutMain}>
          <div className={style.jumbotron}>
            <div className={style.jumbotronInner}>
              <div className={style.topBox}>
                <div className={style.contentBox}>
                  <h1>About Us</h1>
                  <p>
                    Hi there! We're GitGud and we are a team of 6 bootcampers
                    from the The School of Code. We are currently building our
                    final project for the bootcamp and are excited to tell you a
                    bit more about it.
                    <br />
                    <br />
                    Our mission was to bring tenants and landlords closer
                    together by streamlining the way they connect, the way
                    important documents are stored and have a wide range of
                    additional ideas we can bring to our project beyond School
                    of Code.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.imgLayerContainer}>
              <div className={style.teamImage} id={style.teamImage}>
                <img alt="Team image" src="assets/images/teamPic.png" />
              </div>
            </div>
          </div>
          <div className={style.storyContainer}>
            <div className={style.needContainer}>
              <h3 className={style.textCenter}>Need for LetChat</h3>
              <p>
                During our market research we found that there seemed to be an
                overwhelming need, from both sides of the home letting process,
                for a platform that would allow tenants and landlords to connect
                and communicate more effectively. We also found that there was a
                strong desire for a way that would allow tenants and landlords
                to store important documents in one place, with quick and easy
                access if needed.
                <br />
                <br />
                This resulted in us deciding to build LetChat, a platform that
                would solve these problems whilst being wrapped in a user
                friendly and intuitive design.
                <br />
                <br />
                We are also looking to add additional features to our project in
                the future, such as a means of downloading transcripts and
                additional features bases on constant user feedback.
              </p>
              <div className={style.imgContainer}>
                <div className={style.teamImage} id={style.teamImage}>
                  <img alt="conversation gif" src="assets\images\Letchat.gif" />
                </div>
              </div>
              <div className={style.containerDivider}></div>
              <div className={style.techContainer}>
                <h3 className={style.textCenter}>How we built it</h3>
                <p>
                  It started with a very producitve ideation phase where we came
                  up with a list of features we wanted to include in our
                  project. We then broke those down further to ensure we could
                  complete the project in a realistic timeframe and this was
                  done using Miro and Figma.
                  <br />
                  We then went ahead and built the low and high fidelity
                  wireframes, component tree and database schema.
                  <br />
                  <br />
                  The following weeks, we commenced building the project using
                  Next.js, Typescript, TailwindCSS, Express, and Firebase.
                  <br />
                  <br />
                  Throughout development we used Trello and Github to ensure our
                  project was on track, we were able to communicate effectively
                  and ensuring our branches were up to date and protected.
                  <br />
                  <br />
                  We constantly came together to re-evaluate our user journeys
                  and improve the user experience all whilst making sure we were
                  on track to complete the project in time.
                </p>
                <br />
                <Link href="https://github.com/SchoolOfCode/bc13_final-project_front-end-git-gud/blob/main/README.md">
                  Click here to find out more about our project on Github.
                </Link>
                <div className={style.imgContainer}>
                  <img src="" alt="" className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
