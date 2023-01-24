import style from "../styles/About.module.scss";
import Container from "../components/Container";

const About = () => {
  return (
    <>
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
                <img
                  alt="Team image"
                  src=""
                />
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
                <img
                  src=""
                  alt=""
                  className="img-responsive"
                />
              </div>
            </div>
            <div className={style.containerDivider}></div>
            <div className={style.techContainer}>
              <h3 className={style.textCenter}>How we built it</h3>
              <p>
                It started with a very producitve ideation phase where we came
                up with a list of features we wanted to include in our project.
                We then broke those down further to ensure we could complete the
                project in a realistic timeframe and this was done using Miro
                and Figma.
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
                We constantly came together to re-evaluate our user journeys and
                improve the user experience all whilst making sure we were on
                track to complete the project in time.
              </p>
              <div className={style.imgContainer}>
                <img
                  src=""
                  alt=""
                  className="img-responsive"
                />
              </div>
            </div>
            <div className={style.containerDivider}></div>
            <div className={style.originStoryContainer}>
              <h3 className={style.textCenter}>Origin Story</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non iusto odio officiis magnam tempore mollitia, atque consequatur? Corrupti, tempora provident! Dolorem, eius quibusdam quisquam debitis iste dolorum animi doloribus! Architecto rem, a possimus laudantium, earum quasi soluta voluptatem excepturi iure, itaque quis. Numquam dolore quibusdam, perspiciatis quae voluptas blanditiis nesciunt doloremque rem nisi natus ea consequuntur maiores, rerum repellendus velit id mollitia, excepturi quis est at omnis delectus corrupti! Vitae!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat ex nemo impedit, corporis inventore laudantium harum facilis esse! Veritatis iure harum deserunt similique natus provident quo molestias corrupti quas nesciunt eius rem minima, possimus tempora labore praesentium illum impedit at aut alias sapiente! Perspiciatis dolorem repellendus harum dolor nihil porro pariatur totam voluptatem. Ad soluta voluptates quam qui enim, necessitatibus perferendis exercitationem consequatur sit id, ipsam at maxime voluptatibus?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit tempora fugiat, quo quasi animi sunt doloribus sed eos ut, minus nam provident iste ducimus quam! Beatae vitae doloribus voluptatibus, voluptate earum dolorem distinctio nisi nemo deserunt itaque possimus asperiores, nobis quasi commodi eius fugiat. Voluptatibus maxime ex sit distinctio iusto consequuntur, veritatis dolorem et non incidunt facilis reiciendis corporis sapiente fugit commodi illum, praesentium doloribus. Dolor accusantium impedit libero.
              </p>
            </div>
            <div className={style.containerDivider}></div>
            <div className={style.todayContainer}>
              <h3 className={style.textCenter}>Flash Forward Today</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatibus laboriosam et, exercitationem cumque sint voluptas unde officia dicta reprehenderit nemo corporis nam quasi provident voluptate a quod veniam, ad explicabo impedit odio quis. Aut iusto reprehenderit qui? Minus totam reprehenderit alias ut doloribus earum voluptates iusto necessitatibus ad animi laudantium mollitia saepe tenetur, optio labore aspernatur tempora quo expedita sed, maxime veniam at est quis minima. Quibusdam, pariatur atque!
              </p>
              <ul>
                <li>Create and store definitions of their APIs</li>
                <li>Generate SDKs for their APIs for 10 platforms</li>
                <li>Keep these SDKs in sync with API updates</li>
                <li>
                  Convert API descriptions into multiple formats (Swagger, API
                  Blueprint, RAML etc.)
                </li>
                <li>
                  Generate beautiful documentation for their APIs and SDKs
                </li>
                <li>Generate complete Developer Experience API Portals</li>
              </ul>
            </div>
            <div className={style.containerDivider}></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
