import Head from "next/head";

import Container from "../components/Container";

const termsofuse = () => {
  return (
    <>
      <Head>
        <title>LetChat | Terms Of Use</title>
        <meta
          name="description"
          content="Streamlined communication between tenants and landlords."
        />
        <meta name="author" content="Git Gud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className=" m-auto max-w-3xl ">
          <h1>LetChat Code of Conduct</h1>

          <h2>Our Pledge</h2>

          <p>
            We want LetChat to be a safe and secure application that people can
            use with confidence and ensure it remains a harassment-free
            experience for everyone.
          </p>

          <h2>Our Standards</h2>

          <p>
            Examples of behavior that contributes to creating a positive
            environment include:
          </p>

          <ul>
            <li>Using welcoming, inclusive and positive language</li>
            <li>Being respectful of differing viewpoints and experiences</li>
            <li>Gracefully accepting constructive criticism</li>
            <li>Focusing on building a strong relationship</li>
            <li>Showing empathy towards each other</li>
          </ul>

          <p>Examples of unacceptable behavior by participants include:</p>

          <ul>
            <li>
              The use of sexualized language or imagery and unwelcome sexual
              attention or advances
            </li>
            <li>
              Trolling, insulting/derogatory comments, and personal or political
              attacks
            </li>
            <li>Public or private harassment</li>
            <li>
              Publishing others' private information, such as a physical or
              electronic address, without explicit permission
            </li>
            <li>
              Spamming or harassing via constant ticket generation and messaging
            </li>
            <li>Unecessary communucations at unsociable hours</li>
          </ul>

          <h2>Our Responsibilities</h2>

          <p>
            As a company we are commited to upholding these standards and have
            the right and responsibility to remove or edit comments that do not
            align with the code of conduct. We also reserve the right to
            temporarily or permanently ban users for other harmful behaviours
            such as being threatening or offensive.
          </p>

          <h2>Scope</h2>

          <p>
            This Code of Conduct applies both within project spaces and in
            public spaces when an individual is representing the project or its
            community. Examples of representing a project or community include
            using an official project e-mail address, posting via an official
            social media account, or acting as an appointed representative at an
            online or offline event. Representation of a project may be further
            defined and clarified by project maintainers.
          </p>

          <h2>Enforcement</h2>

          <p>
            Instances of abusive, harassing, or otherwise unacceptable behavior
            may be reported by contacting the project team at
            gitgudletchat@gmail.com. All complaints will be reviewed and
            investigated and will result in a response that is deemed necessary
            and appropriate to the circumstances. The project team is obligated
            to maintain confidentiality with regard to the reporter of an
            incident. Further details of specific enforcement policies may be
            posted separately.
          </p>

          <p>
            Team members who do not follow or enforce the Code of Conduct in
            good faith may face temporary or permanent repercussions as
            determined by other members of the project's leadership.
          </p>
        </div>
      </Container>
    </>
  );
};

export default termsofuse;
