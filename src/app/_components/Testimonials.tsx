"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "سارة عبد الله",
    location: "الرياض",
    content:
      "لقد جربت العديد من أدوات التصفيف، لكن هالأداة هذي نقلة نوعية! شعري صار أكثر صحة، وما عاد أخاف من تلف الحرارة.",
    rating: 5,
    image:
      "https://reviews.am-usercontent.com/images/u/o/058cc6eb57fdc2e7c6b975376f821c8fad6daa91/ali-images/b6082db423dd42f0a2e60866e4c81f27.jpeg",
  },
  {
    id: 2,
    name: "نورة فيصل",
    location: "جدة",
    content: "ميزة شفط الشعر التلقائي رهيبة، خلاص ما في تشابك!",
    rating: 4,
    image: "https://cdn.a2rev.com/images/a2-v4epacsqpqw18xx1.jpeg",
  },
  {
    id: 3,
    name: "ريم محمد",
    location: "الدمام",
    content:
      "أخيرًا حصلت على أداة تعطيني نتائج زي الصالون بدون ما تضر شعري. ما أقدر أعيش بدونها!",
    rating: 5,
    image: "https://cdn.a2rev.com/images/a2-j3tfdw5wzmtun6je.webp",
  },
  {
    id: 4,
    name: "هند علي",
    location: "مكة",
    content:
      "من يوم ما استخدمت الأداة هذي، شعري صار أكثر نعومة وسهولة في التصفيف. ما توقعت أبداً النتيجة هذي!",
    rating: 4,
    image:
      "https://reviews.am-usercontent.com/images/u/o/f5cc27c5f814689c3b26b4ee90015301f287f670/ali-images/ec8af67218144e9893ebb36c9ff1107b.jpeg",
  },
  {
    id: 5,
    name: "جواهر حسن",
    location: "المدينة المنورة",
    content:
      "أداة مرة ممتازة! شعري صار خفيف ولما أحطها عليه، يطلع مرتب وجميل بدون ما يتعبني.",
    rating: 4,
    image: "https://cdn.a2rev.com/images/a2-evjzeqkwgqygzy98.jpeg",
  },
  {
    id: 6,
    name: "مريم خالد",
    location: "أبها",
    content:
      "أداة التصفيف هذي غيرت شكل شعري، ما توقعت النتيجة. شعري صار ينحاف مع أقل جهد وأسرع.",
    rating: 5,
    image: "https://ae01.alicdn.com/kf/Ae4d4271748124faea383bb94a26de683d.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto px-4 py-12 w-full max-w-5xl" id="testimonials">
      <div className="relative mb-2">
        <h2 className="-top-6 right-1/2 absolute opacity-10 font-bold text-5xl text-primary whitespace-nowrap translate-x-1/2 overflow-hidden">
          رأي العملاء
        </h2>
        <h2 className="relative z-10 mb-4 font-bold text-4xl text-center text-primary">
          رأي العملاء
        </h2>
        <p className="font-semibold text-center text-lg text-muted-foreground">
          ثقة أكثر من +5000 سيدة
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="bg-card rounded-lg"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col justify-between rounded-md">
              <div className="relative mb-4 w-full h-[400px]">
                <Image
                  src={testimonial.image}
                  alt={`Image for ${testimonial.name}`}
                  fill
                  className="rounded-b-none rounded-md object-cover"
                />
              </div>
              <div className="flex justify-center items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>
                    {index < testimonial.rating ? (
                      <Star className="fill-primary" />
                    ) : (
                      <Star className="" />
                    )}
                  </span>
                ))}
              </div>
              <div>
                <div className="w-full font-semibold text-center">
                  {testimonial.name}
                </div>
                <div className="opacity-80 w-full text-center text-sm">
                  {testimonial.location}
                </div>
              </div>
              <blockquote className="mb-10 p-1 text-center text-lg">
                {testimonial.content}
              </blockquote>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: #db009a;
        }
        .swiper-pagination-bullet {
          background-color: #db009a;
        }
      `}</style>
    </section>
  );
}
