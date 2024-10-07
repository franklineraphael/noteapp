import React from "react";

function Login() {
  return (
    <div>
      <section class="bg-[url('/img.JPG')] h-screen flex items-center justify-center">
        <div class="bg-white w-[43å0px] h-[600px] rounded-lg">
          <div class="flex justify-center mt-10">
            <img src="logo.svg" alt="" />
          </div>
          <h1 class="text-center mt-10 font-bold text-xl">Sign in</h1>
          <p class="text-center mt-2 text-slate-600">
            Sign in to continue to your Dashboard
          </p>
          <form action="">
            <div class="mt-10">
              <div class="flex justify-center border-inherit">
                <input
                  type="Email"
                  placeholder="Email"
                  class="border-inherit mt-3 pt-5 pb-5 pr-[120px] pl-2 rounded-lg border-[1px] border-solid-black-400"
                />
              </div>
              <div class="flex justify-center border-inherit">
                <input
                  type="password"
                  placeholder="password"
                  class="border-inherit mt-6 pt-5 pb-5 pr-[120px] pl-2 rounded-lg border-[1px] border-solid-black-400"
                />
              </div>
            </div>
            <div class="mt-2 flex">
              <a
                href=""
                class="text-blue-600 justify-center flex text-[12px] ml-[60px]"
              >
                Reset password
                {/* <span class="material-symbols-outlined text-sm">
                  arrow_outward
                </span> */}
              </a>
            </div>
            <div class="flex justify-center mt-1">
              <button class="bg-blue-700 px-[130px] py-[20px] rounded-lg text-white mt-5">
                Sign in
              </button>
            </div>
            <div className="text-center mt-10">
              <span className="text-center">
                New to mono?
                <a href="" className="text-blue-600 text-center gap-2">
                  Create account
                </a>
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
