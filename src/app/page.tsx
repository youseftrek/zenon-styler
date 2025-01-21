import Link from "next/link";
import BoxContent from "./_components/BoxContent";
import Gurantees from "./_components/Gurantees";
import Hero from "./_components/Hero";
import Offer from "./_components/Offer";
import OrderForm from "./_components/OrderForm";
import ProductDescription from "./_components/ProductDescription";
import Testimonials from "./_components/Testimonials";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1920px] container">
      <Hero />
      <ProductDescription />
      <BoxContent />
      <Gurantees />
      <Testimonials />
      <Offer />
      <OrderForm />
      <div className="right-0 bottom-3 left-0 z-50 fixed mx-auto px-3 w-full">
        <Link
          href="#order"
          className={cn(
            buttonVariants({ size: "icon" }),
            "rounded-full h-16 w-16"
          )}
        >
          شراء الآن
        </Link>
      </div>
    </div>
  );
}
