"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import OnlyFans from "@/public/images/case-studies/onlyfans.webp";
import Twitch from "@/public/images/case-studies/twitch.jpg";
import YouTube from "@/public/images/case-studies/youtube.jpg";
import { Transition } from "@headlessui/react";

const ICON_CLASSES = "w-4 h-4 fill-current text-white mr-2";
const ICON_PROPS = {
  xmlns: "http://www.w3.org/2000/svg",
  className: ICON_CLASSES,
  viewBox: "0 0 24 24",
  strokeWidth: "1",
  stroke: "currentColor",
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const ONLYFANS = (
  <svg {...ICON_PROPS}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      className="stroke-current text-white"
      d="M8.5 6a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0 -13z"
    />
    <path
      className="stroke-current text-blue-600"
      d="M8.5 15a2.5 2.5 0 1 1 0 -5a2.5 2.5 0 0 1 0 5z"
    />
    <path
      className="stroke-current text-white"
      d="M14 16c2.5 0 6.42 -1.467 7 -4h-6c3 -1 6.44 -3.533 7 -6h-4c-3.03 0 -3.764 -.196 -5 1.5"
    />
  </svg>
);

const INSTAGRAM = (
  <svg {...ICON_PROPS}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
    <path
      className="stroke-current text-blue-600"
      d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
    />
    <path className="stroke-current text-blue-600" d="M16.5 7.5l0 .01" />
  </svg>
);

const YOUTUBE = (
  <svg {...ICON_PROPS}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
    <path className="stroke-current text-blue-600" d="M10 9l5 3l-5 3z" />
  </svg>
);

const TWITCH = (
  <svg {...ICON_PROPS}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z" />
    <path className="stroke-current text-blue-600" d="M16 8l0 4" />
    <path className="stroke-current text-blue-600" d="M12 8l0 4" />
  </svg>
);

const CASE_STUDIES = [
  {
    id: 1,
    platform: "OnlyFans",
    icon: ONLYFANS,
    image: OnlyFans,
    sections: [
      {
        title: "Setup",
        content:
          "Laura syncs past chats and our AI experts infuse her personality into an automated chatbot.",
      },
      {
        title: "Launch",
        content:
          'Laura promotes her "exclusive chat" on socials with a sign-up link. Fans can easily subscribe via the link for monthly chat access. Avatar.ai manages both sign-up and payments.',
      },
      {
        title: "Insights",
        content:
          "Laura reviews chatbot-generated conversations and flags off-brand messages. She easily tracks key metrics like subscriber count and passive revenue.",
      },
    ],
  },
  // {
  //   id: 2,
  //   platform: "Instagram",
  //   icon: INSTAGRAM,
  //   image: About2,
  //   sections: [
  //     { title: 'Setup', content: 'Emily syncs past chats and our AI experts infuse her personality into an automated chatbot.' },
  //     { title: 'Launch', content: 'Emily promotes her "exclusive chat" on socials with a sign-up link. Fans can easily subscribe via the link for monthly chat access. Avatar.ai manages both sign-up and payments.' },
  //     { title: 'Insights', content: 'Emily reviews chatbot-generated conversations and flags off-brand messages. She easily tracks key metrics like subscriber count and passive revenue.' },
  //   ],
  // },
  {
    id: 2,
    platform: "YouTube",
    icon: YOUTUBE,
    image: YouTube,
    sections: [
      {
        title: "Setup",
        content:
          "Mayuko collaborates with our AI to craft a personalized chatbot trained to interact with YouTube fans and redirect towards her paid Patreon page and paid courses.",
      },
      {
        title: "Launch",
        content:
          "Our engineers embed the chatbot on Mayuko's YouTube, which then interacts in comments. It identifies devoted fans and nudges them towards her paid content.",
      },
      {
        title: "Insights",
        content:
          "Mayuko monitors chatbot comments and adjusts its tone. A dedicated dashboard displays KPIs including Patreon redirects and top-performing videos.",
      },
    ],
  },
  {
    id: 3,
    platform: "Twitch",
    icon: TWITCH,
    image: Twitch,
    sections: [
      {
        title: "Setup",
        content:
          "Nick and our AI craft a chatbot reflecting his unique personality, targeting merchandise promotions.",
      },
      {
        title: "Launch",
        content:
          "avatar.ai interacts with his Twitch chat during his streams, fostering deeper fan connections. It answers questions and pushes relevant merch to ardent fans.",
      },
      {
        title: "Insights",
        content:
          "Nick is able to view chatbot interactions to ensure fidelity to his brand. His dashboard tracks user retention and direct revenue from chatbot-driven merch sales.",
      },
    ],
  },
] as const;

export default function CaseStudies() {
  const [tab, setTab] = useState<number>(1);
  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-24 md:pb-0">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <div className="uppercase mb-4 text-xl font-bold text-blue-600 tracking-wider">
              Case Studies
            </div>
            <h2
              className="h2 mb-4"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              Creators around the world choose avatar.ai
            </h2>
            <p
              className="text-xl text-gray-600"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              Creators from all platforms choose to use avatar.ai to manage
              their communities and brand.
            </p>
          </div>

          {/* Section content */}
          <div>
            {/* Tabs buttons */}
            <div
              className="flex flex-wrap justify-center -m-2"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              {CASE_STUDIES.map((c) => (
                <button
                  key={c.id}
                  className={`btn-sm flex items-center font-medium py-2 px-4 m-2 bg-blue-600 group transition duration-500 ${
                    tab !== c.id && "opacity-50"
                  }`}
                  onClick={() => setTab(c.id)}
                >
                  {c.icon}
                  <span className="text-white group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                    {c.platform}
                  </span>
                </button>
              ))}
            </div>

            {/* Tabs items */}
            <div className="transition-all">
              <div
                className="relative flex flex-col mt-16"
                data-aos="fade-up"
                ref={tabs}
              >
                {CASE_STUDIES.map((c) => (
                  <Transition
                    key={c.id}
                    show={tab === c.id}
                    className="w-full"
                    enter="transition ease-in-out duration-500 transform order-first"
                    enterFrom="opacity-0 scale-98"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-out duration-300 transform absolute"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-98"
                    beforeEnter={() => heightFix()}
                  >
                    {
                      <article className="relative max-w-md mx-auto md:max-w-none">
                        <figure
                          className={`md:absolute md:inset-y-0 md:w-1/2 ${
                            c.id % 2 === 0 ? "md:right-0" : "md:left-0"
                          }`}
                        >
                          <Image
                            className="w-full h-full object-cover"
                            src={c.image}
                            width={516}
                            height={387}
                            alt={c.platform}
                          />
                        </figure>
                        <div
                          className={`relative bg-blue-600 py-8 md:py-16 px-6 md:max-w-lg lg:max-w-xl ${
                            c.id % 2 === 0
                              ? "md:px-12 md:mr-auto"
                              : "md:px-12 md:ml-auto"
                          }`}
                        >
                          <h3 className="h3 text-white mb-4">{c.platform}</h3>
                          {c.sections.map((s, i) => (
                            <div className="mb-4" key={i}>
                              <div className="h5 font-bold text-white">
                                {s.title}
                              </div>
                              <p className="text-sm text-white">{s.content}</p>
                            </div>
                          ))}
                          {/*<Link className="btn-sm btn text-blue-600 bg-gradient-to-r from-blue-100 to-white mt-4" href={`/${c.platform.toLowerCase()}`}>*/}
                          {/*  <span className="text-sm">Learn more</span>*/}
                          {/*  <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">*/}
                          {/*  -&gt;*/}
                          {/*</span>*/}
                          {/*</Link>*/}
                        </div>
                      </article>
                    }
                  </Transition>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
