import Image from "next/image";
import Countdown from "./CountDown";

const Offer = () => {
  const endDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();
  return (
    <section className="mx-auto px-4 pt-12 w-full max-w-4xl" id="order">
      <div className="relative mb-2">
        <h2 className="-top-6 right-1/2 absolute opacity-10 font-bold text-5xl text-primary whitespace-nowrap translate-x-1/2 overflow-hidden">
          عرض الأصدقاء
        </h2>
        <h2 className="relative z-10 mb-4 font-bold text-4xl text-center text-primary">
          عرض الأصدقاء
        </h2>
        <p className="font-semibold text-center text-lg text-muted-foreground">
          اشتري أكثر ووفري أكثر{" "}
          <span className="text-green-500">+ شحن مجاني لمدة 48 ساعة فقط</span>
        </p>
      </div>
      <Image
        src="/images/offer.png"
        width={500}
        height={500}
        alt="offer"
        className="mx-auto rounded-md"
      />
      <div className="flex justify-center items-center bg-gradient-to-tr from-primary/50 to-primary/10 mt-4 py-4 rounded-md h-fit">
        <Countdown endDate={endDate} />
      </div>
    </section>
  );
};

export default Offer;
