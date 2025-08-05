import { Link } from "react-router-dom";
import type { FC, FormEventHandler } from "react";
import Iridescence from "../../UI/Iridesence";
import SocialHandles from "../SocialHandles";

interface AuthProps {
  type: "signup" | "signin";
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Auth: FC<AuthProps> = ({
  type,
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
}) => {
  const isSignUp = type === "signup";

  return (
    <div className="flex flex-col  md:flex-row min-h-screen relative">
      <div className="absolute inset-0 -z-5 backdrop-blur-3xl">
        <Iridescence
          color={[0.5, 0.8, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={0.2}
        />
      </div>
      <div className="md:w-1/2  rounded-2xl flex flex-col justify-center items-center  m-1 md:m-0 md:rounded-t-3xl md:mt-1 md:rounded-b-none md:bg-[#0c0c0c] text-[#f9f9f9]">
        <div className="md:max-w-[25vw] w-full flex flex-col  md:h-[50vh]">
          <div className="logo-container p-4">
            <Link
              to={"/"}
              className="site-logo max-w-[25vw] text-lg md:text-2xl  font-semibold text-[#f9f9f9] font-bricolage-logo"
            >
              Hack Secure
            </Link>
          </div>
          <div className="my-auto p-8">
            {isSignUp ? (
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Start learning with your free plan
              </h1>
            ) : (
              <h1 className=" text-3xl md:text-4xl font-bold mb-4 text-center">
                Welcome back
              </h1>
            )}
            {isSignUp ? (
              <p className="text-md text-center">No prerequisites.</p>
            ) : (
              <p className="text-md text-center">
                Continue your learning journey.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="md:w-1/2 mb-10 md:mb-0 flex items-center justify-center  p-6">
        <div className="p-1 backdrop-blur-lg backdrop-contrast-200 outline outline-[#f9f9f9]/10 w-full max-w-md rounded-xl">
          <div className="bg-[#f9f9f9] backdrop-blur-3xl rounded-[inherit] shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              {isSignUp ? "Sign up" : "Sign in"}
            </h2>

            <form onSubmit={onSubmit} className="space-y-5 rounded-md">
              <div className="rounded-lg">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-[inherit] focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="rounded-lg">
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-[inherit] focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-[inherit] hover:bg-blue-700 transition"
              >
                Continue
              </button>
            </form>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="space-y-3 rounded-md">
              <button className="w-full flex items-center justify-center border border-gray-300 rounded-[inherit] py-2 hover:bg-gray-50 transition">
                <span className="mr-2">🐙</span> Continue with GitHub
              </button>
              <button className="w-full flex items-center justify-center border border-gray-300 rounded-[inherit] py-2 hover:bg-gray-50 transition">
                <span className="mr-2">🌐</span> Continue with Google
              </button>
              <button className="w-full flex items-center justify-center border border-gray-300 rounded-[inherit] py-2 hover:bg-gray-50 transition">
                <span className="mr-2">🪟</span> Continue with Microsoft
              </button>
            </div>

            <p className="text-center text-sm mt-6">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <Link
                to={isSignUp ? "/signin" : "/signup"}
                className="text-blue-600 hover:underline"
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 md:bottom-4 w-full flex justify-center md:justify-end  md:right-4">
        <SocialHandles />
      </div>
    </div>
  );
};

export default Auth;
