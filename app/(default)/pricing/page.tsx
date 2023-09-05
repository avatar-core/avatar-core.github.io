import Cta from "@/components/cta";
import FeaturesTable from "@/components/features-table";
import PricingTables from "@/components/pricing-tables";
import TestimonialsCarousel from "@/components/testimonials-carousel";

export const metadata = {
  title: "Pricing - Avatar",
  description: "Engage your audience intelligently",
};

export default function Pricing() {
  return (
    <>
      <PricingTables />
      <FeaturesTable />
      <TestimonialsCarousel />
      <Cta />
    </>
  );
}
