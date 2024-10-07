import React, { useState } from "react";
import {
  Bars3Icon,
  BeakerIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

import {
  Dialog,
  Disclosure,
  DialogPanel,
  DisclosurePanel,
  DisclosureButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverBackdrop,
  PopoverPanel,
  Description,
} from "@headlessui/react";

function Menu() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const links = [
    {
      name: "Why choose mono",
      Description: "Here's why 100+ Business & Developers are Mono APIs",
      icon: "nav_icon_why_mono.svg",
      href: "#",
    },
    {
      name: "Pricing",
      Description: "Affordable Pricing for developers, SMEs and enterprises",
      icon: "pricing.svg",
      href: "#",
    },
    {
      name: "See a Demo",
      Description: "Experience Mono APIs in action",
      icon: "nav_icon_demo.svg",
      href: "#",
    },
  ];

  const productsLink = [
    {
      name: "Connect",
      Description: "Here's why 100+ Business & Developers are Mono APIs",
      icon: "nav_icon_why_mono.svg",
      href: "#",
    },
    {
      name: "Direct pay",
      Description: "Affordable Pricing for developers, SMEs and enterprises",
      icon: "pricing.svg",
      href: "#",
    },
    {
      name: "Portal",
      Description: "Experience Mono APIs in action",
      icon: "nav_icon_demo.svg",
      href: "#",
    },
    {
      name: "Statement pages",
      Description: "Experience Mono APIs in action",
      icon: "nav_icon_demo.svg",
      href: "#",
    },
    {
      name: "Directpay pages",
      Description: "Experience Mono APIs in action",
      icon: "nav_icon_demo.svg",
      href: "#",
    },
    {
      name: "Percept",
      Description: "Experience Mono APIs in action",
      icon: "nav_icon_demo.svg",
      href: "#",
    },
  ];

  const learnLink = [
    {
      name: "About us",
      Description: "Here's why 100+ Business & Developers are Mono APIs",
      icon: "nav_icon_why_mono.svg",
      href: "#",
    },
    {
      name: "Tutorials",
      Description: "Affordable Pricing for developers, SMEs and enterprises",
      icon: "pricing.svg",
      href: "#",
    },
    {
      name: "Blog",
      Description: "Experience Mono APIs in action",
      icon: "nav_icon_demo.svg",
      href: "#",
    },
    {
      name: "Coverage",
      Description: "Experience Mono APIs in action",
      icon: "nav_icon_demo.svg",
      href: "#",
    },
  ];

  const developersLinks = [
    {
      name: "Overview",
      Description: "Here's why 100+ Business & Developers are Mono APIs",
      icon: "nav_icon_why_mono.svg",
      href: "#",
    },
    {
      name: "Documentation",
      Description: "Affordable Pricing for developers, SMEs and enterprises",
      icon: "pricing.svg",
      href: "#",
    },
  ];

  return (
    <div>
      <header className="bg-gay">
        <nav className="mx-auto flex  justify-between items-center p-6 max-w-7xl lg:px-8">
          <div className="flex lg:flex-1">
            <a href="" className="p-3.5 m-3.5">
              <img src="/logo.svg" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button onClick={() => setMobileMenuOpened(true)}>
              <Bars3Icon className="h-12 w-12" />
            </button>
          </div>
          {/* <div className="flex flex-row mr-10"> */}
          <PopoverGroup className="hidden lg:flex px-3 lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-md font-semibold text-gray-600">
                Why Mono?
                <ChevronDownIcon className="h-5 w-5" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {links.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-center p-4 gap-x-6 shodow-lg rounded bg-gray-50 group-hover:bg-white"
                    >
                      <div>
                        <img src={item.icon} alt="" srcSet="" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href}>{item.name}</a>
                        <p>{item.Description}</p>

                        <p>{}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          <PopoverGroup className="hidden lg:flex px-3 lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-md font-semibold text-gray-600">
                Products
                <ChevronDownIcon className="h-5 w-5" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {productsLink.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-center p-4 gap-x-6 shodow-lg rounded bg-gray-50 group-hover:bg-white"
                    >
                      <div>
                        <img src={item.icon} alt="" srcSet="" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href}>{item.name}</a>
                        <p>{item.Description}</p>

                        <p>{}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          <PopoverGroup className="hidden lg:flex px-3 lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-md font-semibold text-gray-600">
                Learn
                <ChevronDownIcon className="h-5 w-5" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {learnLink.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-center p-4 gap-x-6 shodow-lg rounded bg-gray-50 group-hover:bg-white"
                    >
                      <div>
                        <img src={item.icon} alt="" srcSet="" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href}>{item.name}</a>
                        <p>{item.Description}</p>

                        <p>{}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          <PopoverGroup className="hidden lg:flex px-3 lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-md font-semibold text-gray-600">
                Developers
                <ChevronDownIcon className="h-5 w-5" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {developersLinks.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-center p-4 gap-x-6 shodow-lg rounded bg-gray-50 group-hover:bg-white"
                    >
                      <div>
                        <img src={item.icon} alt="" srcSet="" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href}>{item.name}</a>
                        <p>{item.Description}</p>

                        <p>{}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
          {/* </div>  */}
        </nav>
      </header>

      <Dialog open={mobileMenuOpened} onClose={setMobileMenuOpened}>
        <div className="flex lg:hidden">
          <button onClick={() => setMobileMenuOpened(true)}>
            menu is open
          </button>
        </div>
      </Dialog>
    </div>
  );
}

export default Menu;
