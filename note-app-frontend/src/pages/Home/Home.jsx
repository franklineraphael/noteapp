import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Navbar/Menu";

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Menu />
      <main class="mt-40 mx-auto">
        <div class="flex justify-center mx-4">
          <div class="">
            <div class="bg-slate-100 px-2 py-1 rounded-2xl max-w-sm flex items-center mx-6">
              <span class="bg-blue-600 pr-2 pl-2 pb-1 pt-1 rounded-2xl">
                New
              </span>
              The Mono Widget 2.0 is live!
              <span class="material-symbols-outlined">arrow_forward</span>
            </div>
            <div class="mx-6">
              <h1 class="mt-10 font-extrabold text-8xl">
                Reliably access <br class="mt-5" />
                bank accounts
              </h1>
              <p class="text-2xl mt-10">
                Mono helps bussiness to access high-quality <br />
                financial data and direct bank payment
              </p>
            </div>
            <div class="mt-20 mx-6">
              <button class="bg-blue-600 p-2 rounded-lg">
                <a href=""> Get started for free</a>
              </button>
              <button class="ml-10 bg-slate-200 p-2 rounded-lg border-[1px] border-solid-black-900">
                <a href="">Contact Sales</a>
              </button>
            </div>
          </div>
          <div>
            <img
              src="download.png"
              class="float-right ml-5"
              width="500px mx-6"
            />
          </div>
        </div>

        {/* <p class="ml-[120px] mt-[100px]">Trusted by</p>
        <div class="flex justify-center mt-[30px] justify-evenly mb-30 mr-[220px]">
          <img src="carbon-logo.svg" class="" />
          <img src="image-7renmoney.svg" class="" />
          <img src="flutterwave-logo.svg" class="" />
          <img src="image-10evolve_credit.svg" alt="" />
        </div>
        <div class="ml-[116px]">
          <h1 class="mt-20 font-extrabold text-6xl">
            Build for the future <br />
            of digital finance
          </h1>
          <p class="mt-10">
            Bring tomorrow's solutions to life, with our <br />
            customer-focused solutions, today.
          </p>
        </div>
        <div class="mx-[120px] grid bg-blue-600 mt-20 rounded-lg px-[50px] py-[60px]">
          <div class="rounded-lg">
            <img src="vector-6.svg" class="" />
            <h4 class="mt-6 text-white">Connect</h4>
            <p class="mt-6 text-white">
              Securely access financial accounts for <br />
              statements, transactions, and identity
            </p>
            <button class="bg-white text-blue-600 py-3 px-3 rounded-lg mt-6">
              <a href="">Start with Connect</a>
            </button>
          </div>
        </div>
        <div class="mx-[90px] flex justify-center">
          <div class="bg-slate-200 flex">
            <div class="bg-blue-100">
              <img src="vector-1get-started-icon.svg" alt="" />
              <h4>DirectPay</h4>
              <p>
                Collect bank payments in your web or mobile app. <br />
                No cards.No chargebacks
              </p>
              <button class="bg-blue-600">
                <a href="">Start with DirectPay</a>
              </button>
            </div>
            <div class="">
              <img src="union.svg" alt="" />
              <h4>Percent</h4>
              <p>
                Money operations and reconciliation for all your corporate
                accounts, in one dashboard
              </p>
              <button>
                <a href="">Request access</a>
              </button>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}

export default Home;
