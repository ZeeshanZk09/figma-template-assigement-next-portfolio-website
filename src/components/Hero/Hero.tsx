import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <section className="flex flex-col md:flex-row-reverse h-screen  justify-between items-center mx-4 py-20 md:pt-72 px-6 md:px-16 bg-white">
      {/* Image Section */}
      <div className=" md:w-1/2 w-fit flex flex-col items-center">
        {/* <div className="absolute  pl-5 w-80 h-80"></div> */}
        <div className="hero-img w-72 h-72 lg:w-96 lg:h-96 rounded-full border-2 border-t-slate-400 border-b-[#04AF70] border-r-[#04AF70] border-l-[#04AF70] shadow-black shadow-inner "></div>

        {/* Social Icons */}
        <div className="flex mt-6 space-x-4 ">
          {/* Replace with actual links and icons */}
          <Link
            href="https://facebook.com"
            className="grayscale hover:grayscale-0"
          >
            <Image
              src="/assets/images/facebook_5968764.png"
              alt="Fb Icon"
              height={50}
              width={50}
            />
          </Link>
          <Link
            href="https://twitter.com"
            className="grayscale hover:grayscale-0"
          >
            <Image
              src="/assets/images/twitter_5968830.png"
              alt="twitter icon"
              height={50}
              width={50}
            />
          </Link>
          <Link
            href="https://github.com"
            className="grayscale hover:grayscale-0"
          >
            <Image
              src="/assets/images/github_14051861.png"
              alt="github icon"
              height={50}
              width={50}
            />
          </Link>
          <Link
            href="https://wa.me/923343489702"
            className="grayscale hover:grayscale-0"
          >
            <Image
              src="/assets/images/whatsapp_2111728.png"
              alt="whatsapp icon"
              height={50}
              width={50}
            />
          </Link>
        </div>
      </div>
      {/* Text Section */}
      <div className="flex flex-col text-left md:w-1/2">
        <p className="text-xl font-light">Hi I am</p>
        <span className="text-[#04AF70] text-2xl md:text-4xl 2xl:text-6xl">
          Muhammad Zeeshan Khan
        </span>
        <br />
        <h1 className="text-3xl md:text-5xl 2xl:text-7xl font-bold">
          <span className="block">Web & Mobile App</span>
          <span className="block xl:indent-60 md:indent-20 2xl:indent-96">
            Developer
          </span>
        </h1>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra.
        </p>
        <button className="mt-6 w-fit bg-[#04AF70] text-white py-2 px-8 rounded-md hover:bg-[#04af70cb] hover:text-black">
          Hire Me
        </button>
      </div>
    </section>
  );
}

export default Hero;
