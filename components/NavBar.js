import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const navigation = [
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];
// <nav className='fixed z-30 w-full bg-gray-200 dark:bg-gray-900 shadow bg-opacity-70 backdrop-filter backdrop-blur-sm'>
const NavBarr = () => {
  return (
    <nav className="flex justify-between items-center ">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="lg:pr-10 pt-2 pb-2 lg:pt-3 lg:pb-3 flex items-center bg-green-400">
              <div className="container mx-auto px-3 flex items-center justify-between">
                <a className="uppercase text-gray-900 dark:text-gray-200 font-black text-3xl flex items-center">
                  <Image src="/logo.svg" alt="logo" width="64" height="30" />
                </a>
                <div className="flex items-center">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4 text-gray-900 dark:text-gray-200">
                      {navigation.map((item, index) => (
                        <div
                          key={item.name}
                          to={item.href}
                          smooth={true}
                          className="py-2 px-6 flex border-2 cursor-pointer hover:border-gray-400 dark:border-gray-200 border-gray-900 hover:text-gray-200 hover:bg-gray-600 rounded-md text-sm font-medium"
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-1 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center hover:border-gray-900  justify-center p-2 rounded-md text-gray-400 hover:text-gray-900   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 dark:text-gray-200 text-gray-900"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 dark:text-gray-200 text-gray-900"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    onClick={() => {
                      console.log(open);
                      open = false;
                      console.log(open);
                    }}
                    className="dark:text-white text-gray-900 cursor-pointer hover:border-gray-900 hover:text-gray-900 hover:bg-gray-500 block px-3 py-2 rounded-md text-base font-medium text-center"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="h-px dark:bg-gray-200 bg-gray-900 ml-10 mr-10 opacity-10"></div>
    </nav>
  );
};
const NavBar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <nav className="flex justify-between items-center ">
            <div className="flex items-center">
              <div className="pr-4 pt-2">
                <Image src="/logo.svg" alt="logo" width="64" height="30" />
              </div>
              <div className="hidden md:block">
                <ul className="flex space-x-2">
                  <NavItem title="Product" />
                  <NavItem title="Download" />
                  <NavItem title="Solutions" />
                  <NavItem title="Resources" />
                  <NavItem title="Pricing" />
                </ul>
              </div>
            </div>
            <div className="hidden md:block">
              <ul className="flex  items-center space-x-2">
                <NavItem title="Contact sales" />
                <NavItem title="Login" />
                <li className="rounded font-semibold border-x m-1 border-gray300 cursor-pointer bg-red-500 text-gray-200 p-1 text-xs hover:bg-red-600 ">
                  Try Notion free
                </li>
              </ul>
            </div>
            <div className="absolute right-1 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center hover:border-gray-900  justify-center p-2 rounded-md text-gray-400 hover:text-gray-900   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon
                    className="block h-6 w-6  text-gray-900"
                    aria-hidden="true"
                  />
                ) : (
                  <Bars3Icon
                    className="block h-6 w-6  text-gray-900"
                    aria-hidden="true"
                  />
                )}
              </Disclosure.Button>
            </div>
          </nav>
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 py-2 pb-3 space-y-4 flex flex-col text-center">
              <ul className="items-center self-center">
                <NavItem title="Product" />
                <NavItem title="Download" />
                <NavItem title="Solutions" />
                <NavItem title="Resources" />
                <NavItem title="Pricing" />
                <NavItem title="Contact sales" />
                <NavItem title="Login" />
                <li className="rounded font-semibold border-x m-1 border-gray300 cursor-pointer bg-red-500 text-gray-200 p-1 text-xs hover:bg-red-600 ">
                  Try Notion free
                </li>
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
