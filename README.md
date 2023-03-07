# Team Git Gud Presents

[![Logo-With-Text.png](https://i.postimg.cc/V6gZw7Cw/Logo-With-Text.png)](https://postimg.cc/FdfVgVpC)

<h3 align="center">LetChat</h3>

---

<p align="center"> 
LetChat aims to make the renting process easier for both landlords and tenants by providing a platform for communication and documentation.
    <br> 
By using LetChat you can create a job ticket, upload documents and chat with your landlord or tenant in real time within a secure environment.
    
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Tech Stack](#tech_stack)
- [Lessons Learned](#lessons_learned)
- [Documentation](#documentation)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

Renting a property can be a stressful experience where ideally you would want communication between landlord and tenant to be as clear and simple as possible.

Currently, communication is often done via email or text message which can be confusing and time consuming. The long term impact of this may result in landlords and tenants getting frustrated with one another and making an already stressful experience even more unpleasant.

Long term relationships are built on trust and communication, and we believe that LetChat can help to build a positive relationship between landlords and tenants.

## 💡 Idea / Solution <a name = "idea"></a>

Our solution to this was to build a platform that connected landlords and tenants directly, to enable both parties to build a positive and long standing relationship through clear communication and trust with an emphasis on security all whilst being wrapped in a simple, appealing and easy to use interface.

## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

- We are using a free tier of Firebase for authentication and storage, this means that we are limited to 1GB of storage and 1000 users which may result in the app being slow to load and/or not being able to store all of the users data.
- As the app isn't mandatory for landlords and tenants to use, we are limited to the number of users we can get to sign up.
  As both parties need to use the app together in order to reap the benefits we will have to push the app to both parties with strong marketing and advertising.
- We will be holding users key documentation and user data so GDPR compliance must be adhered to. This will require keeping on top of any law chances and updating our app accordingly.
- Authorisation and security is paramount. We will also be using Firebase's email verification to ensure that only verified users can access the app.
- We are using a free tier of Netlify for hosting, this means that we are limited to 100GB of bandwidth per month and 300 build minutes per month. This may result in the app being slow to load and/or not being able to store all of the users data.
  To combat this we'll be expanding our hosting to a paid tier once we have more users.

## 🚀 Future Scope <a name = "future_scope"></a>

We didn't have time to implement secure document storage, as a result we scaled back our mvp to focus on the job board, ticket generation with a custom chat interface for said tickets, whilst having our user roles set we are in the process of finalising our database so that specific landlords can connect with specific tenants via linked IDs .

In the future we are confident that we can implement the above document storage as well as a host of other features ie: payment monitor, a tools and guides page to help tenants maintain the property themselves, the option to download transcripts and templates for things like inventories, checkout and tenancy agreements.

## 🏁 Visit Our Website <a name = "vist_our_website"></a>

You can sign up to our app by visiting <a href="www.letchat.co.uk">LetChat</a>

## 🎈 Usage <a name="usage"></a>

When you first visit the site you can sign up with an email address this must be valid as you will receive a conformation email.

For security reasons we designed the app to be protected until verification is complete.
Once verified you will be able to login with email and password.

You will them be redirected to our job board where you interact with the app.
Once again for security reasons, if your forget to logout your account will be logged out on page close.

## ⛏️ Tech Stack <a name = "tech_stack"></a>

- [PostgreSQL](https://www.postgresql.org) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NextJs](https://nextjs.org/) - Web Framework
- [Typescript](https://www.typescriptlang.org) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Taliwind](https://tailwindcss.com) - CSS
- [Sass](https://sass-lang.com/) - CSS
- [Firebase](https://firebase.google.com/) - Auth
- [Jest](https://jestjs.io) - Testing
- [Cypress](https://www.cypress.io) - Testing

You can view the frontend and backend repo here:

- https://github.com/SchoolOfCode/bc13_final-project_front-end-git-gud

- https://github.com/SchoolOfCode/bc13_final-project_back-end-git-gud

## 🏫 Lessons Learned <a name = "lessons_learned"></a>

- We learned Next.js and how much more we like it than vanilla React. Used Next's built-in router as well as the Context API.
- TailwindCSS and daisyUI for fast prototyping and further visual styling.
- Using Firebase for auth and role-based user permissions. Adding security with email link validation.
- Using mock data until as late as possible so the data-model has time to develop and therefore there's less time needs to be spent coding the backend.
- Good planning in general goes a long way and then the code basically writes itself.
- After a couple of weeks we realised our team structure in the way we were working together and that splitting into pairs made us much more productive.
- Colour blindness and other general accessibility concerns.
- The importance of market research.
- More on Postgres data types.
- Understating about the architecture of a full-stack app starting with a the visual aspect.
- We learned to compromise on UI for the sake of UX for a better user workflow.
- Different approaches in designing a component tree.
- If in doubt - 'npm i'
- Restart your server after adding .env
- Deploying a custom domain on Netlify.
- Unit testing with Next.
- How to use images in Next.
- Cross-page rendering.
- How to work with unfamiliar coding practices.
- Dynamic routing in Next.
- Different pairs work better together in different situations.
- Awaiting promises properly in TypeScript and lots more TS in general.
- How to pass Regex patterns in Next.

## 📃 Documentation <a name = "documentation"></a>

- [Our Team Manifesto](./letchat/Documentation/TEAMMANIFESTO.md)
- [Code Style Guide](./letchat/Documentation/CODESTYLEGUIDE.md)
- [Branching Strategy](./letchat/Documentation/BRANCHING.md)
- [Making Pull Requests](./letchat/Documentation/PULLREQUESTS.md)
- [Colour Pallet](./letchat/Documentation/COLOURPALLET.md)

## ✍️ Authors <a name = "authors"></a>

- https://github.com/Lakorthus - Julio Velezmoro
- https://github.com/Bazelden - Jack Waller
- https://github.com/emiliawil - Emilia Williamson
- https://github.com/cowtipping - Adie Nunn
- https://github.com/jasonjjjc - Jason Chalangary
- https://github.com/ashdashlee - Ash-Lee McKenna

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

We would like to thank the school of code for making this all possible!

- https://www.schoolofcode.co.uk - https://github.com/SchoolOfCode
