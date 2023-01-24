import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { LoginContainer } from "../../utils";

const SignUser = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    role: "",
    firstname: "",
    surname: "",
    phonenumber: "",
  });
  const router = useRouter();
  const { signup } = useAuth();

  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      await signup(
        data.email,
        data.password,
        data.role,
        data.firstname,
        data.surname,
        data.phonenumber
      );
      router.push("/jobboard");
    } catch (err) {
      console.log(err);
      alert("User already exists");
    }
  };

  return (
    <>
      <LoginContainer title="Create an account">
        <form onSubmit={submitHandler} className="space-y-3 lg:space-y-4">
          <h2 className="font-bold text-center text-gray-800">
            See LetChat in action today
          </h2>
          <div className="flex flex-col items-center justify-between text-gray-700">
            <label className="text-gray-700 text-center mb-4 sm:w-[50%] md:w-full">
              Would you like to register as a Tenant or Landlord?
            </label>
            {/* <select
              className="ml-6 w-[35%]"
              name="role"
              id="role"
              required
              onChange={changeHandler}
            >
              <option value="">{null}</option>
              <option value="landlord">Landlord</option>
              <option value="tenant">Tenant</option>
            </select> */}
            <div className="text-gray-700">
              <input
                type="radio"
                name="role"
                value="landlord"
                onChange={changeHandler}
              />{" "}
              Landlord
              <input
                className="ml-6"
                type="radio"
                name="role"
                value="tenant"
                onChange={changeHandler}
              />{" "}
              Tenant
            </div>
          </div>
          <div className="space-y-1">
            {/* <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name:
            </label> */}
            <div className="mt-1">
              <input
                placeholder="First Name"
                onChange={changeHandler}
                value={data.firstname}
                id="firstname"
                name="firstname"
                type="firstname"
                autoComplete="current-name"
                required
                className="block bg-white w-full text-black appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            {/* <label
              htmlFor="surname"
              className="block text-sm font-medium text-gray-700"
            >
              Surname:
            </label> */}
            <div className="mt-1">
              <input
                placeholder="Surname"
                onChange={changeHandler}
                value={data.surname}
                id="surname"
                name="surname"
                type="surname"
                autoComplete="current-surname"
                required
                className="block bg-white w-full text-black appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            {/* <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number:
            </label> */}
            <div className="mt-0">
              <input
                placeholder="Contact Number (e.g. 07777777777)"
                onChange={changeHandler}
                value={data.phonenumber}
                id="phonenumber"
                name="phonenumber"
                type="phonenumber"
                autoComplete="current-phonenumber"
                pattern="^(?:(?:\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3}|\d{11})$"
                required
                className="block bg-white w-full text-black appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            {/* <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label> */}
            <div className="mt-1">
              <input
                placeholder="Email address"
                onChange={changeHandler}
                value={data.email}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                className="block w-full text-black appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            {/* <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label> */}
            <div className="mt-1">
              <input
                placeholder="Password"
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
              className="flex w-full  rounded-full justify-center border border-transparent bg-light-primary py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create your account
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
      </LoginContainer>
    </>
  );
};

export default SignUser;
