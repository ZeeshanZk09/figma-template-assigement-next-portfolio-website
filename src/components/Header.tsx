"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import {Projects2} from '@/components/Projects' 
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(true);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
 
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "/services", label: "Services" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <header className=" m-6 absolute bg-transparent inset-x-0 top-0 z-50">
      <nav className="flex w-full  items-center justify-between  " aria-label="Global">
        <div className="flex w-fit  ">
          <Link href="/" className=" w-fit">
            <span className="sr-only">Zk Muhammad Zeeshan Khan</span>
            <Image
              className="w-56  lg:w-60 xl:w-72 2xl:w-80"
              src="/assets/images/Logo.svg"
              alt="ZK logo"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <div className="flex sm:hidden w-[10%] justify-end">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-black"
            onClick={handleToggleMenu}
          >
            <span className="sr-only">Open dropdown menu</span>
            <svg
              className="h-10 w-10 text-black"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {/* Center Links - Fixed */}
        <div className="hidden  sm:flex sm:items-center nav-links  overflow-hidden sm:w-[50%] z-50 ">
          <ul className="flex  fixed bg-[#f5f0f08a] backdrop-blur-xl p-3 rounded-full w-[50%] sm:flex  sm:text-[0.667rem] md:text-[0.778rem] text-black lg:text-[1rem] xl:text-[1.278rem] 2xl:text-[1.556rem] sm:justify-between sm:justify-self-center">
            {navLinks.map(({href,label},index) => (
              <li key={index}>
                <Link href={href} className=" font-normal hover:underline leading-6 ">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:flex w-fit sm:justify-end ">
          <Link
            href="/assets/docs/ZK Resume.pdf"
            target="_blank"
            id="loginBtn"
            className="relative w-fit px-2 py-1 sm:text-[0.778rem] md:text-[1rem] lg:text-[1.278rem] xl:text-[1.556rem] 2xl:text-[1.944rem] font-semibold bg-[#04AF70]  border-2 border-white rounded-lg cursor-pointer outline-none z-50 overflow-hidden"
          >
            Download CV
          </Link>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-0 left-0 right-0 z-50 w-full   p-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-[#57ff9db4] rounded backdrop-blur-3xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Menu"
          ref={menuRef}
          // style={{ insetBlockStart: "0", top: "0" }}
        >
          <div className="flex items-center justify-between ">
            <Link href="/" className="-m-1.5 p-1.5  ">
              <span className="sr-only">ZK Muhammad Zeeshan Khan</span>
              <Image
                className="   z-1000 contrast-100"
                src="/assets/images/Logo.svg"
                alt="Logo"
                width={250}
                height={50}
              />
            </Link>
            <button
              type="button"
              className=" rounded-md p-2.5"
              onClick={handleToggleMenu}
            >
              <span className="sr-only">Close mobile menu</span>
              <svg
                className="h-6 w-6 text-black"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className=" ">
              <ul className="space-y-2  text-black">
                {navLinks.map(({ href, label }, index) => (
                  <li key={index}>
                    <Link href={href} className=" font-normal hover:underline leading-6 ">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="py-6">
                <Link
                  href="/assets/images/ZK Resume.pdf"
                  target="_blank"
                  download={true}
                  className="relative w-fit px-2 py-1 font-medium bg-[#04af7080]   rounded-lg  outline-transparent z-50 text-black overflow-hidden "
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
