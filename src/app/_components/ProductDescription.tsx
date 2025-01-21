import Image from "next/image";

const ProductDescription = () => {
  return (
    <section className="relative my-24" id="info">
      <h2 className="-top-6 right-1/2 absolute opacity-10 font-bold text-5xl text-primary whitespace-nowrap translate-x-1/2 overflow-hidden">
        وصف المنتج
      </h2>
      <h2 className="relative z-10 mb-4 font-bold text-4xl text-center text-primary">
        وصف المنتج
      </h2>
      <div className="flex lg:flex-row flex-col items-center gap-4 w-full">
        <Image
          src="/images/desctiption-image.png"
          width={600}
          height={600}
          alt="description"
          className="rounded-md w-full lg:w-1/2 object-cover"
        />

        <p className="px-2 lg:w-1/2 text-muted-foreground">
          تستخدم أدوات الشعر التقليدية حرارة مباشرة وشديدة يمكن أن تتلف شعرك مع
          مرور الوقت. يستخدم مصفف الشعر الهوائي المتعدد 5 في 1 تقنية حرارية
          متقدمة لتوزيع الحرارة بالتساوي، مما يقلل من خطر التكسر وتقصف الأطراف.
          <br />
          هذه المجموعة المبتكرة مصممة لتلبية جميع احتياجات شعرك، وبفضل تقنية
          الأيونات المتقدمة والطلاء السيراميكي تقوم المجموعة بحبس الرطوبة وتقلل
          التجعيد وتضمن توزيعاً متساوياً للحراة مع 3 مستويات للسرعة والحرارة.
          مما يوفر لكي نتائج ممتازة وإحترافية كما في صالونات التجميل. بالإضافة
          الي أن المجموعة خفيفة الوزن وسهلة التنقل بها سواء داخل المنزل أو
          خارجه.
        </p>
      </div>
    </section>
  );
};

export default ProductDescription;
