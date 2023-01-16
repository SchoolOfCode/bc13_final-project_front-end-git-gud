import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { initFirebase } from "../../firebase/firebaseApp";
import Link from "next/link";

const LogUser = () => {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    router.push("/jobboard");
    return <div>Loading...</div>;
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  const logOut = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="hero h-[100vh] lg:place-items-start">
      <div className="flex border-slate-800 border-4  flex-col items-center justify-center min-h-[80%] w-[80%] drop-shadow-lg rounded-t-[20%] mt-[13.5rem] bg-light-light lg:min-h-full lg:bg-transparent lg:drop-shadow-none lg:px-10 lg:mt-0 lg:w-fit lg:border-none ">
        <div className="containter flex mt-4 lg:hidden">
          <div className="w-5 h-5 rounded-full bg-slate-600 flex justify-center items-center">
            <div className="w-1 h-1 rounded-full bg-slate-300 "></div>
          </div>
          <div className="w-32 h-5 rounded-full bg-slate-600 ml-3 flex justify-center items-center">
            <div className="w-28 h-1 rounded-full bg-slate-300"></div>
          </div>
        </div>
        <div className="flex flex-1 flex-col py-12 sm:px-6 lg:flex-none lg:px-10 lg:glass">
          <div className="mx-auto w-72 h-full max-w-sm lg:w-96  drop-shadow-2xl">
            <div className="flex flex-col justify-between pb-14">
              <h2 className="text-center mt-6 text-5xl font-bold tracking-tight text-gray-900">
                Login
              </h2>

              <div className="mt-8">
                <div className="mt-6">
                  <button
                    type="submit"
                    onClick={signIn}
                    className="text-center mt-6 text-5xl font-bold tracking-tight text-gray-900 "
                  >
                    Firebase LogIn
                  </button>

                  <button
                    className="text-center mt-6 text-5xl font-bold tracking-tight text-gray-900"
                    onClick={() => auth.signOut()}
                  >
                    Firebase LogOut
                  </button>

                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full  rounded-full justify-center border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Login
                      </button>
                    </div>

                    <div className="flex items-center justify-center ">
                      <div className="text-md w-full pl-2">
                        <p className="font-medium text-gray-900 tracking-wide">
                          Not a member?
                          <span className="text-light-primary cursor-pointer hover:text-light-primary underline ml-5">
                            <Link href="/sign">Register</Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogUser;
