import Link from "next/link";
import VideoThumb from "@/public/images/hero-image-01.png";

import ModalVideo from "@/components/modal-video";

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            {/*<div data-aos="fade-down" className="mb-6">*/}
            {/*  <div className="inline-flex relative round-full before:absolute before:inset-0 before:bg-blue-500 before:blur-md">*/}
            {/*    <a className="btn-sm py-1 text-white hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.blue.600),_theme(colors.blue.600))_padding-box,_linear-gradient(theme(colors.blue.600),_theme(colors.blue.300)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-blue-600/50 rounded-full before:pointer-events-none shadow" href="#0">*/}
            {/*      <span className="text-sm relative inline-flex items-center">*/}
            {/*        avatar.ai is now in beta <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>*/}
            {/*      </span>*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div data-aos="zoom-out">*/}
            {/*  <div className="relative text-sm text-white bg-blue-600 rounded-full inline-block px-4 py-1 mb-6 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-blue-600 before:to-blue-600 before:via-blue-400 before:rounded-full">*/}
            {/*    <div className="text-white">*/}
            {/*      The most advanced AI community manager{' '}*/}
            {/*      <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div
              className="uppercase mb-4 text-xl font-bold text-blue-600 tracking-wider"
              data-aos="zoom-y-out"
            >
              avatar.ai
            </div>
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Engage your community{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                intelligently
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Use the latest in AI technology to control how you manage your
                communities. avatar.ai automatically chats with your fans, and
                convert fans into paying customers.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Link
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 group"
                    href="/waitlist"
                  >
                    I'm Interested
                    <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/*<ModalVideo*/}
          {/*  thumb={VideoThumb}*/}
          {/*  thumbWidth={768}*/}
          {/*  thumbHeight={432}*/}
          {/*  thumbAlt="Modal video thumbnail"*/}
          {/*  video="/videos/video.mp4"*/}
          {/*  videoWidth={1920}*/}
          {/*  videoHeight={1080} />*/}
        </div>
      </div>
    </section>
  );
}
