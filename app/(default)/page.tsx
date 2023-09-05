import Cta from "@/components/cta";
import Faqs from "@/components/faqs";
import World from "@/components/features-world";
import Hero from "@/components/hero-home";
import News from "@/components/news";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import HowItWorks from "@/components/works";

export const metadata = {
  title: "Home - Avatar",
  description: "Engage your audience intelligently",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <World />
      <Faqs />
      {/*<News />*/}
      <Cta />
    </>
  );
}
