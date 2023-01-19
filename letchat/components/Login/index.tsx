import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { LoginContainer } from "../../utils";

const LogUser = () => {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      router.push("/jobboard");
    }
  }, [user]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
    } catch (err) {
      alert("Email or Password is incorrect");
    }
  };

  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <LoginContainer title="Login account">
        <form className="space-y-6" action="#" method="POST">
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
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                onChange={changeHandler}
                value={data.password}
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
              onClick={handleSubmit}
              type="submit"
              className="flex w-full  rounded-full justify-center border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
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
                  <form className="space-y-6" action="#" method="POST">
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
                          onChange={changeHandler}
                          value={data.password}
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
                        onClick={handleSubmit}
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
      </LoginContainer>
    </>
  );
};
export default LogUser;
