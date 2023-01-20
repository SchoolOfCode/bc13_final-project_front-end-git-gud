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
                  src="https://apimatic.io/img/theme/aboutUs/images-1.png"
                />
              </div>

              <div className="circles-container">
                <div className={style.teamA}>
                  <img src="https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg" />
                </div>
                <div className={style.teamB}>
                  <img src="https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg" />
                </div>
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
                  src="https://apimatic.io/img/theme/aboutUs/dxFlow.svg"
                  alt="apimatic developer experience process"
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
                  src="https://apimatic.io/img/theme/cgaasIcons/cgaasProcess.gif"
                  alt="apimatic code generation engine"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className={style.containerDivider}></div>
            <div className={style.originStoryContainer}>
              <h3 className={style.textCenter}>Origin Story</h3>
              <p>
                While doing research work for their PhDs from the University of
                Auckland in 2014, our founders came across one of the API
                industry's pain points: SDKs. They realized that API providers
                who spent hundreds of thousands of dollars every year on
                improving developer experience, by providing SDKs and
                user-friendly documentation were able to reach a wider developer
                audience for their APIs compared to API providers who weren't
                able to do so.
              </p>
              <p>
                It was so clear that even though writing SDKs and documentation
                was a difficult and expensive task, it followed repeatable
                patterns which could be defined as logic blocks in a code
                generation engine. So, as a research project, they started
                working on a code generation engine which dynamically generated
                SDKs using API description as input.
              </p>
              <p>
                After a rigorous journey, this research project was selected as
                a candidate for commercialization by Return on Science (a NZ
                national research commercialization program focused on bringing
                new academic research to market) and the concept was transformed
                into a product i.e. APIMatic.
              </p>
            </div>
            <div className={style.containerDivider}></div>
            <div className={style.todayContainer}>
              <h3 className={style.textCenter}>Flash Forward Today</h3>
              <p>
                APIMatic has come a long way since its inception 3 years ago.
                Having started with only generating SDKs, APIMatic now provides
                solutions in other areas of developer experience as well.
                Presently, APIMatic is used by numerous organizations around the
                world to:
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
