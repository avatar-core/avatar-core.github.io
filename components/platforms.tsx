"use client";

import Image from "next/image";
import Instagram from "@/public/images/platforms/instagram.svg";
import OnlyFans from "@/public/images/platforms/onlyfans.svg";
import TikTok from "@/public/images/platforms/tiktok.svg";
import Twitch from "@/public/images/platforms/twitch.svg";
import YouTube from "@/public/images/platforms/youtube.svg";

import Particles from "./particles";

export default function Platforms() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-24">
        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="pt-12 md:pt-20 max-w-3xl mx-auto text-center mb-8">
          <div className="uppercase mb-4 text-xl font-bold text-blue-600 tracking-wider">
            Platforms
          </div>
          <h2 className="h2 mb-4">Manage your communities on multiple creator platforms</h2>
        </div>

        <div className="flex items-center justify-between">
          <Image src={Instagram} alt="instagram" width={110} height={21} />
          <Image src={YouTube} alt="youtube" width={110} height={21} />
          <Image src={TikTok} alt="tiktok" width={110} height={21} />
          <Image src={OnlyFans} alt="onlyfans" width={110} height={21} />
          <Image src={Twitch} alt="twitch" width={110} height={21} />
        </div>
      </div>
    </section>
  );
}
