import Threads from "../UI/Threads";

export default function Auth() {
  return (
    <div className="h-screen w-screen">
      <div className="bg-[#0f0f0f] absolute -z-10 inset-0 ">
        <Threads amplitude={0.3} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="flex h-screen justify-center items-center">
        <div className=" backdrop-brightness-180 text-[#e9e6e1] backdrop-blur-md w-full z-10 max-w-md mx-auto p-4 border border-[#0f0f0f]/20 rounded-xl shadow-xl">
          <h2 className="font-bricolage-light text-3xl text-[#e9e6e1] w-full text-center font-semibold mb-8 p-2 capitalize">
            Sign Up
          </h2>
          <form className="text-base tracking-tightest space-y-4">
            <div className="font-bricolage flex flex-col-reverse">
              <input
                type="text"
                placeholder="Username"
                autoComplete="username"
                className="peer w-full font-bricolage-light border-b border-b-[#0f0f0f] relative placeholder:absolute outline-none p-2 placeholder:duration-500 focus:placeholder:pt-10"
              ></input>
              <span className="pl-2  duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:translate-y-0">
                Username
              </span>
            </div>
            <div className="flex border-b border-b-[#0f0f0f]">
              <div className="flex flex-grow flex-col-reverse">
                <input
                  placeholder="Password"
                  autoComplete="current-password"
                  className="peer w-full font-bricolage-light relative placeholder:absolute outline-none p-2 placeholder:duration-500 focus:placeholder:pt-10"
                />
                <span className="pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:translate-y-0">
                  Password
                </span>
              </div>
            </div>
            <div className="flex flex-col-reverse">
              <span className="pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:translate-y-0">
                Bio
              </span>
            </div>
            <div className="flex font-bricolage items-center">
              <button
                type="submit"
                className={`w-full flex-grow py-2 h-fit cursor-pointer rounded text-[#efefef] transition bg-slate-900
                `}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
