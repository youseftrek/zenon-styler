import BoxContent from "./_components/BoxContent";
import Gurantees from "./_components/Gurantees";
import Hero from "./_components/Hero";
import ProductDescription from "./_components/ProductDescription";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <ProductDescription />
      <BoxContent />
      <Gurantees />
      <Testimonials />
    </div>
  );
}
