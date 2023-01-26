import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { LoginContainer } from "../../utils";
import Link from "next/link";

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
        <form className="m-auto space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="text-md block  font-bold text-gray-700"
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
              className="text-md block  font-bold text-gray-700"
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
              className="flex w-full  justify-center rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div>

          <div className="flex items-center justify-center ">
            <div className="text-md w-full pl-2">
              <p className="font-bold tracking-wide text-gray-900">
                Not a member?
                <span className="ml-5 cursor-pointer text-light-primary underline hover:text-light-primary">
                  <Link href="/sign">Register</Link>
                </span>
              </p>
            </div>
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
      </LoginContainer>
    </>
  );
};
export default LogUser;
