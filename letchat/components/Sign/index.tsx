import Link from "next/link";
import { SocialGrid } from "../../utils";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

const SignUser = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const router = useRouter();
  const { signup } = useAuth();

  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      await signup(data.email, data.password, data.role);
      router.push("/jobboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hero h-[100vh] align-center lg:w-[50%]">
      <div className="hero-content h-full lg:h-[65%] lg:mb-[25%] w-full ">
        <div className="flex border-slate-800 border-4  flex-col justify-around h-[100%] w-[98%] drop-shadow-lg rounded-t-[20%] bg-light-light lg:min-h-full lg:bg-transparent lg:drop-shadow-none lg:w-full lg:border-none ">
          <div className="flex items-center justify-center mt-4 lg:hidden">
            <div className="w-5 h-5 rounded-full bg-slate-600 flex justify-center items-center">
              <div className="w-1 h-1 rounded-full bg-slate-300 "></div>
            </div>
            <div className="w-32 h-5 rounded-full bg-slate-600 ml-3 flex justify-center items-center">
              <div className="w-28 h-1 rounded-full bg-slate-300"></div>
            </div>
          </div>

          <div className="mx-auto p-6 flex flex-1 flex-col w-[95%] h-full lg:glass lg:w-[80%]  drop-shadow-2xl">
            <div className="flex flex-col h-full justify-center">
              <div>
                <h2 className="text-center mt-4 text-3xl font-bold tracking-tight text-gray-900">
                  Sign in to your account
                </h2>

                <p className="mt-2 text-sm text-gray-600 p-5"> buttons </p>

                <SocialGrid />

                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form onSubmit={submitHandler} className="space-y-6">
                    <div>
                      <label>Role:</label>
                      <select
                        name="role"
                        id="role"
                        required
                        onChange={changeHandler}
                      >
                        <option value="">{null}</option>
                        <option value="landlord">Landlord</option>
                        <option value="tenant">Tenant</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          onChange={changeHandler}
                          value={data.email}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full text-black appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                          onChange={changeHandler}
                          value={data.password}
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full text-black  appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full  rounded-full justify-center border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Sign up
                      </button>
                    </div>

                    <div className="flex items-center justify-center ">
                      <div className="text-md w-full text-center">
                        <p className="font-medium text-gray-900 tracking-wide">
                          <span className="text-light-primary hover:text-light-primary underline">
                            <a>Forgot your password?</a>
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

export default SignUser;
