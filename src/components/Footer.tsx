import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-gray-100 absolute flex flex-col items-center  w-full overflow-hidden h-fit    text-black ">
      <div className="container relative w-full flex flex-col items-center   ">
        {/* Logo and navigation */}
        <div className="flex flex-col h-fit w-fit items-center mb-6">
          <Image
            src="/assets/images/Logo.svg"
            alt="Muhammad Zeeshan Khan Logo"
            width={500} // Adjusted width for smaller screens
            height={500}
            className="w-64 h-14 mb-4"
          />
          <nav className="flex flex-wrap justify-center text-sm md:text-lg space-x-4 text-gray-700">
            <Link href="/" className="hover:text-gray-500">
              Home
            </Link>
            <Link href="#about" className="hover:text-gray-500">
              About Me
            </Link>
            <Link href="#services" className="hover:text-gray-500">
              Services
            </Link>
            <Link href="#projects" className="hover:text-gray-500">
              Projects
            </Link>
            <Link href="#testimonials" className="hover:text-gray-500">
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-gray-500">
              Contact
            </Link>
          </nav>
        </div>

        {/* Social media links */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-white">
            <Image src='/assets/images/twitter_5968830.png' alt='Twitter' width={20} height={20} />
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-white">
            <Image src='/assets/images/facebook_5968764.png' alt='Facebook' width={20} height={20} />
          </Link>
          <Link href="https://whatsapp.com" aria-label="WhatsApp" className="hover:text-white">
            <Image src='/assets/images/whatsapp_2111728.png' alt='WhatsApp' width={20} height={20} />
          </Link>
          <Link href="https://github.com" aria-label="GitHub" className="hover:text-white">
            <Image src='/assets/images/github_14051861.png' alt='GitHub' width={20} height={20} />
          </Link>
        </div>

        {/* Copyright text */}
        <div className="bg-gray-800 w-[117%] p-4">

        <p className="text-center  text-gray-100 text-sm">
          © 2023 <span className="text-[#04AF70]">Muhammad Zeeshan Khan</span>. All Rights Reserved.
        </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
