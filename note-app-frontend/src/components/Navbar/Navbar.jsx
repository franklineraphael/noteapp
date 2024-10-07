import React from "react";

function Navbar() {
  return (
    <div>
      <header class="flex justify-evenly mt-10 mx-8">
        <img src="logo.svg" class="mr-10" />
        <div>
          {/* for responsiveness the ul  */}
          <ul class="flex mr-5 hidden sm:flex space-x-4 sm:space-x-10">
            <li class="ml-8 flex">
              <a href="">Why mono</a>
              {/* <span class="material-symbols-outlined">
                {" "}
                keyboard_arrow_down{" "}
              </span> */}
            </li>
            <li class="ml-8 flex">
              <a href="">Products</a>
              {/* <span class="material-symbols-outlined">
                {" "}
                keyboard_arrow_down{" "}
              </span> */}
            </li>
            <li class="ml-8 flex">
              <a href="">Learn</a>
              {/* <span class="material-symbols-outlined">
                {" "}
                keyboard_arrow_down{" "}
              </span> */}
            </li>
            <li class="ml-8 flex">
              <a href="">Developers</a>
              {/* <span class="material-symbols-outlined">
                {" "}
                keyboard_arrow_down{" "}
              </span> */}
            </li>
          </ul>
        </div>

        <button class="bg-blue-600 rounded py-2 px-4 text-white">
          sign in
        </button>
      </header>
    </div>
  );
}

export default Navbar;
