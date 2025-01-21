import { HandCoins, Headset, ShieldCheck, Truck } from "lucide-react";

const Gurantees = () => {
  return (
    <section className="relative my-24 w-full overflow-hidden" id="guarantees">
      <h2 className="-top-6 right-1/2 absolute opacity-10 font-bold text-5xl text-primary whitespace-nowrap translate-x-1/2 overflow-hidden">
        الضمانات و الإسترجاع
      </h2>
      <h2 className="relative z-10 mb-4 font-bold text-4xl text-center text-primary">
        الضمانات و الإسترجاع
      </h2>
      <div className="gap-2 grid grid-cols-2 md:grid-cols-4 max-w-5xl">
        <div className="flex flex-col justify-center items-center gap-2 bg-card p-2 border rounded-md aspect-square">
          <Truck size={60} className="text-primary" />
          <div className="text-center">
            <h3 className="font-bold text-base md:text-xl">شحن مجاني</h3>
            <p className="text-muted-foreground text-xs">
              توصيل مجاني الى باب البيت مع تعقيم المنتج و احترام السلامة الصحية
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-card p-2 border rounded-md aspect-square">
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
        <div className="flex flex-col justify-center items-center gap-2 bg-card p-2 border rounded-md aspect-square">
          <ShieldCheck size={60} className="text-primary" />
          <div className="text-center">
            <h3 className="font-bold text-base md:text-xl">ضمان المنتج</h3>
            <p className="text-muted-foreground text-xs">
              ضمان لمدة 14 يوم اذا لم يعجبكم المنتج يمكنكم استعادة نقودكم
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-card p-2 border rounded-md aspect-square">
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
