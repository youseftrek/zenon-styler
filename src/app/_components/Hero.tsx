import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDownLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mx-auto my-24" id="home">
      <div className="items-center gap-8 grid lg:grid-cols-2">
        <div className="lg:text-right flex flex-col justify-center items-center text-center">
          <Badge variant="outline" className="text-primary">
            متجر زينون يقدم
            <ArrowDownLeft className="ml-2 size-4" />
          </Badge>
          <h1 className="my-6 font-black text-4xl text-pretty lg:text-6xl">
            مجموعة تصفيف الشعر
            <br /> 5 في 1
          </h1>
          <p className="mb-8 px-2 max-w-xl text-muted-foreground lg:text-xl">
            جميع ستايلات الشعر بدون تلف بدون تقصف، الرفيق المثالي لتصفيف الشعر
          </p>
          <div className="flex justify-center gap-2 w-full">
            <Link
              href="#order"
              className={cn(buttonVariants({ size: "lg" }), "w-1/2 sm:w-auto")}
            >
              شراء الآن
            </Link>
            <Link
              href="#info"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "w-1/2 sm:w-auto"
              )}
            >
              وصف المنتج
              <ArrowDownLeft className="ml-2 size-4" />
            </Link>
          </div>
        </div>
        <Image
          src="/images/hero-image.png"
          width={540}
          height={540}
          alt="placeholder hero"
          className="mx-auto rounded-md rounded-tl-[100px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
