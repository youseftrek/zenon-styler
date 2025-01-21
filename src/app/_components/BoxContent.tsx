import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const BoxContent = () => {
  return (
    <section className="relative my-24" id="box-content">
      <h2 className="-top-6 right-1/2 absolute opacity-10 font-bold text-5xl text-primary whitespace-nowrap translate-x-1/2 overflow-hidden">
        محتويات العلبة
      </h2>
      <h2 className="relative z-10 mb-4 font-bold text-4xl text-center text-primary">
        محتويات العلبة
      </h2>
      <div className="flex lg:flex-row-reverse flex-col items-center gap-4 w-full">
        <Image
          src="/images/box-contents.png"
          width={800}
          height={800}
          alt="description"
          className="rounded-md w-full lg:w-1/2 object-cover"
        />

        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-2"
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>1. مولد الحرارة والهواء</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  تستخدم هذه المجموعة تقنية تدفق الهواء الساخن بسرعة كبيرة، حيث
                  يتراوح معدل تدفق الهواء بين 25000 لفة في الدقيقة الي 60000 لفة
                  في الدقيقة، مما يجعلها أكثر فاعلية في تجفيف وتصفيف الشعر بدون
                  تلف أو تقصف بفعل الحرارة. وبالمقارنة مع المكواة العادية، فشعرك
                  لا يلامس سطح المكواة مباشرة، مما يحافظ علي سلامة وحيوية الشعر
                  ويمنع تقصفه.
                </p>
                <Image
                  src="/images/img1.png"
                  width={800}
                  height={800}
                  alt="description"
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. ملحق الكيرلر يمين ويسار</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  احصلي علي خصلات مموجة بكل سهولة، حيث ستقوم رأس الكيرلر بلف
                  الشعر بشكل تلقائي مع عدم ملامسة الشعر سطح المكواة مباشرةً كما
                  في المكواة العادية.
                </p>
                <Image
                  src="/images/img2.gif"
                  width={480}
                  height={350}
                  alt="description"
                  className="mx-auto rounded-md"
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. ملحق تصفيف الشعر</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  احصلي علي شعر أكثر نعومة وحيوية وخالي من التشابك بفضل تدفق
                  الهواء الساخن بين خصلات شعرك.
                </p>
                <Image
                  src="/images/img3.gif"
                  width={480}
                  height={350}
                  alt="description"
                  className="mx-auto rounded-md"
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>4. ملحق فرد الشعر</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  احصلي علي شعر ناعم بكل سهولة دون الحاجة الي استخدام جهاز
                  السشوار وفرشاة الفرد، الآن الإثنين مدمجين معاً في رأس واحدة.
                </p>
                <Image
                  src="/images/img4.gif"
                  width={480}
                  height={350}
                  alt="description"
                  className="mx-auto rounded-md"
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>5. ملحق تجفيف الشعر</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  تقوم هذه الرأس بتجفيف الشعر بكل سهولة! فقط قومي بتركيب الرأس
                  الخاصة بتجفيف الشعر واحصلي علي شعر جاف خلال دقائق، وننصح بعدم
                  استخدام حرارة مرتفعة حفاظاً علي سلامة شعرك.
                </p>
                <Image
                  src="/images/img5.gif"
                  width={480}
                  height={350}
                  alt="description"
                  className="mx-auto rounded-md"
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default BoxContent;
