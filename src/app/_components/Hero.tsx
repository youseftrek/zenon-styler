import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDownLeft } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="my-24" id="home">
      <div className="container">
        <div className="items-center gap-8 grid lg:grid-cols-2">
          <div className="lg:text-right flex flex-col items-center lg:items-start text-center">
            <Badge variant="outline">
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
            <div className="flex justify-center lg:justify-start gap-2 w-full">
              <Button className="w-1/2 sm:w-auto" size="lg">
                شراء الآن
              </Button>
              <Button variant="outline" className="w-1/2 sm:w-auto" size="lg">
                وصف المنتج
                <ArrowDownLeft className="ml-2 size-4" />
              </Button>
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
      </div>
    </section>
  );
};

export default Hero;
