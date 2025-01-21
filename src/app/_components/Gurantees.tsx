import { HandCoins, Headset, ShieldCheck, Truck } from "lucide-react";

const Gurantees = () => {
  return (
    <section
      className="relative mx-auto my-24 px-4 max-w-screen-lg"
      id="guarantees"
    >
      {/* Background Title */}
      <h2 className="top-0 left-1/2 absolute opacity-10 font-bold text-2xl text-center text-primary -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        الضمانات
      </h2>
      {/* Main Title */}
      <h2 className="relative z-10 mb-4 font-bold text-4xl text-center text-primary">
        الضمانات
      </h2>
      {/* Guarantees Grid */}
      <div className="gap-4 grid grid-cols-2 md:grid-cols-4 max-w-full">
        {/* Guarantee 1 */}
        <div className="flex flex-col justify-center items-center gap-2 bg-card p-4 border rounded-md aspect-square">
          <Truck size={60} className="text-primary" />
          <div className="text-center">
            <h3 className="font-bold text-base md:text-xl">شحن مجاني</h3>
            <p className="text-muted-foreground text-xs">
              توصيل مجاني الى باب البيت مع تعقيم المنتج و احترام السلامة الصحية
            </p>
          </div>
        </div>
        {/* Guarantee 2 */}
        <div className="flex flex-col justify-center items-center gap-2 bg-card p-4 border rounded-md aspect-square">
          <Headset size={60} className="text-primary" />
          <div className="text-center">
            <h3 className="font-bold text-base md:text-xl">
              خدمة ما بعد البيع
            </h3>
            <p className="text-muted-foreground text-xs">
              خدمة عملاء متاحة طوال الوقت في جميع أيام الأسبوع
            </p>
          </div>
        </div>
        {/* Guarantee 3 */}
        <div className="flex flex-col justify-center items-center gap-2 bg-card p-4 border rounded-md aspect-square">
          <ShieldCheck size={60} className="text-primary" />
          <div className="text-center">
            <h3 className="font-bold text-base md:text-xl">ضمان المنتج</h3>
            <p className="text-muted-foreground text-xs">
              ضمان لمدة 14 يوم اذا لم يعجبكم المنتج يمكنكم استعادة نقودكم
            </p>
          </div>
        </div>
        {/* Guarantee 4 */}
        <div className="flex flex-col justify-center items-center gap-2 bg-card p-4 border rounded-md aspect-square">
          <HandCoins size={60} className="text-primary" />
          <div className="text-center">
            <h3 className="font-bold text-base md:text-xl">
              الدفع عند الإستلام
            </h3>
            <p className="text-muted-foreground text-xs">
              لن تقموا بدفع أي شئ حتى يوصلكم المنتج
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gurantees;
