import Head from "next/head";
import Container from "../components/Container";
import Footer from "../components/Footer";

const Settings = () => {
  return (
    <>
      <Head>
        <title>LetChat | Settings</title>
        <meta
          name="description"
          content="Streamlined communication between tenants and landlords."
        />
        <meta name="author" content="Git Gud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="container mx-auto mt-8 max-w-3xl">
          <h1 className="px-6 text-2xl font-bold text-gray-700 md:px-0">
            Account Settings
          </h1>
          <ul className="mt-3 flex border-b border-gray-300 px-6 text-sm font-medium text-gray-600 md:px-0">
            <li className="mr-8 border-b-2 border-gray-800 text-gray-900">
              <a href="#_" className="inline-block py-4">
                Profile Info
              </a>
            </li>
            <li className="mr-8 hover:text-gray-900">
              <a href="#_" className="inline-block py-4">
                Security
              </a>
            </li>
            <li className="mr-8 hover:text-gray-900">
              <a href="#_" className="inline-block py-4">
                Billing
              </a>
            </li>
          </ul>
          <form>
            <div className="mx-auto mt-8 flex w-full overflow-hidden rounded-lg rounded-b-none bg-white">
              <div className="hidden w-1/3 bg-gray-100 p-8 md:inline-block">
                <h2 className="text-md mb-4 font-medium tracking-wide text-gray-700">
                  Profile Info
                </h2>
                <p className="text-xs text-gray-500">
                  Update your basic profile information such as Email Address,
                  Name, and Image.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <div className="py-8 px-16">
                  <label className="text-sm text-gray-600">Name</label>
                  <input
                    className="mt-2 block w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:outline-none"
                    type="text"
                    value=""
                    name="name"
                  />
                </div>
                <hr className="border-gray-200" />
                <div className="py-8 px-16">
                  <label className="text-sm text-gray-600">Email Address</label>
                  <input
                    className="mt-2 block w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:outline-none"
                    type="email"
                    name="email"
                    value=""
                  />
                </div>
                <hr className="border-gray-200" />
                <div className="clearfix py-8 px-16">
                  <label className="block w-full text-sm text-gray-600">
                    Photo
                  </label>
                  <img
                    className="float-left mt-2 h-16 w-16 rounded-full border-4 border-gray-200"
                    id="photo"
                    src="https://pbs.twimg.com/profile_images/1163965029063913472/ItoFLWys_400x400.jpg"
                    alt="photo"
                  />
                  <div className="relative float-left mt-5 ml-3 cursor-pointer overflow-hidden rounded-lg bg-gray-200 px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-300 hover:text-gray-600">
                    <input
                      type="file"
                      name="photo"
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    />{" "}
                    Change Photo
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix mt-3 rounded-b-lg border-t border-gray-200 bg-gray-300 p-16 py-8">
              <div className="flex w-full justify-between">
                <p className="float-left mt-2 text-xs tracking-tight text-gray-500">
                  Click on Save to update your Profile Info
                </p>
                <input
                  type="submit"
                  className="cursor-pointer rounded bg-indigo-500 px-6 py-2 text-sm font-medium  uppercase text-white"
                  value="Save"
                />
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Settings;
