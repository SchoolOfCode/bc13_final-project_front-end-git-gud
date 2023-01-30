import Head from "next/head";
import Container from "../components/Container";
import { useAuth } from "../context/AuthContext";


const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>LetChat | Profile</title>
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
          <div className="no-wrap md:-mx-2 md:flex ">
            <div className="w-full md:mx-2 md:w-3/12">
              <div className="border-t-4 border-light-secondary bg-white p-3">
                <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
                  {user.firstname.toUpperCase()} {user.surname.toUpperCase()}
                </h1>
                <h3 className="font-lg text-semibold leading-6 text-gray-600">
                  {user.role.toUpperCase()}.
                </h3>
               
                <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="rounded bg-green-500 py-1 px-2 text-sm text-white">
                        Active
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto">Nov 07, 2022</span>
                  </li>
                </ul>
              </div>

              <div className="my-4"></div>

            
            </div>

            <div className="mx-2 h-64 w-full md:w-9/12 border-t-4 border-light-primary">
              <div className="rounded-sm bg-white p-3 shadow-sm">
                <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                  <span className="text-light-secondary">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid text-sm md:grid-cols-2">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2"> Emilia </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2">Williamson</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Role</div>
                      <div className="px-4 py-2">{user.role === "tenent" ? "Landlord" : "Tenent"}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">{user.phonenumber}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Current Address
                      </div>
                      <div className="px-4 py-2">
                      11 St James St. London, United Kingdom
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email.</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href="mailto:jane@example.com"
                        >
                          mw@gmail.com
                        </a>
                      </div>
                    </div>   
                  </div>
                </div>
                <button className="focus:shadow-outline hover:shadow-xs my-4 block w-full rounded-lg p-3 text-sm font-semibold text-blue-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                  Show Full Information
                </button>
              </div>

              <div className="my-4"></div>

              
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
