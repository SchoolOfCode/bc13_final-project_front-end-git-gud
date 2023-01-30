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
  const [termsAgreed, setTermsAgreed] = useState(false);

  const router = useRouter();
  const { signup } = useAuth();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAgreed(!termsAgreed);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (termsAgreed) {
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
        alert("User already exists");
      }
    }
  };

  return (
    <>
      <LoginContainer title="Create an account">
        <form onSubmit={submitHandler} className="space-y-3 lg:space-y-4">
          <h2 className="text-center font-bold text-gray-800">
            See LetChat in action today
          </h2>
          <div className="flex flex-col items-center justify-between text-gray-700">
            <label className="mb-4 text-center text-gray-700 sm:w-[50%] md:w-full">
              Would you like to register as a Tenant or Landlord?
            </label>
            <div className="text-gray-700">
              <label htmlFor="landlord">
                <input
                  type="radio"
                  name="role"
                  value="landlord"
                  onChange={changeHandler}
                />
                Landlord
              </label>
              <label htmlFor="tenant">
                <input
                  className="ml-6"
                  type="radio"
                  name="role"
                  value="tenant"
                  onChange={changeHandler}
                />
                Tenant
              </label>
            </div>
          </div>
          <div className="space-y-1">
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
                className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
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
                className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
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
                className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
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
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-black placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
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
                className="block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-black placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-1">
              <label>
                By clicking this you agree to{" "}
                <Link href="/termsofuse">our terms of use</Link>{" "}
                <input type="checkbox" onChange={checkboxHandler} />
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="text-md flex  w-full justify-center rounded-full border border-transparent bg-light-primary py-2 px-4 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create your account
            </button>
          </div>
        </form>
      </LoginContainer>
    </>
  );
};

export default SignUser;
