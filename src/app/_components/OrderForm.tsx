"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const OrderForm = () => {
  const router = useRouter();
  const [quantity, setQuantity] = useState<number | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [quantityError, setQuantityError] = useState<string>("");

  const getItemPrice = (): number => {
    if (quantity === 1) return 159;
    if (quantity === 2) return 149;
    if (quantity && quantity >= 3) return 144;
    return 159;
  };

  const calculateTotalPrice = (): number => {
    return (quantity ?? 0) * getItemPrice();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!quantity) {
      setQuantityError("الرجاء اختيار الكمية.");
      toast.error("الرجاء اختيار الكمية قبل إتمام الطلب.");
      setIsSubmitting(false);
      return;
    }

    const orderData = {
      firstName,
      lastName,
      phone,
      city,
      address,
      notes,
      quantity,
      totalPrice: calculateTotalPrice(),
    };

    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        alert("تم تقديم الطلب بنجاح، سيتم التواصل معك قريبا.");
        router.push("?success=true", { scroll: false });
      } else {
        toast.error("حدث خطأ في تقديم الطلب. حاول مجددًا لاحقًا.");
      }
    } catch (error) {
      toast.error("حدث خطأ غير متوقع. حاول مجددًا لاحقًا.");
      console.error("Error sending order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="shadow-lg border w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center">اختر العرض المناسب</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Dropdown for quantity selection */}
          <div className="mb-6">
            <Label htmlFor="quantity">كمية:</Label>
            <Select
              onValueChange={(value: unknown) => {
                setQuantity(Number(value));
                setQuantityError(""); // Clear error on selection
              }}
              disabled={isSubmitted}
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر الكمية" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">قطعة واحدة</SelectItem>
                <SelectItem value="2">قطعتان - خصم 20 ريال</SelectItem>
                <SelectItem value="3">ثلاثة قطع - خصم 45 ريال</SelectItem>
              </SelectContent>
            </Select>
            {quantityError && (
              <p className="mt-1 text-red-500 text-sm">{quantityError}</p>
            )}
          </div>

          {/* Pricing display */}
          <div className="space-y-2 mb-6">
            <p>
              سعر القطعة:{" "}
              <span className="font-bold text-pink-600">
                {calculateTotalPrice() ? getItemPrice() : "يرجى تحديد الكمية"}{" "}
                {calculateTotalPrice() ? "ريال" : " "}
              </span>
            </p>
            <p>
              السعر الكلي:{" "}
              <span className="font-bold text-green-600">
                {calculateTotalPrice()
                  ? "ريال + شحن مجاني"
                  : "يرجى تحديد الكمية"}
              </span>
            </p>
          </div>

          {/* Shipping form */}
          <form onSubmit={handleSubmit}>
            <h3 className="mb-4 font-semibold text-lg">معلومات الشحن</h3>
            <div className="gap-4 grid grid-cols-2">
              <div>
                <Label htmlFor="firstName">الاسم الأول</Label>
                <Input
                  id="firstName"
                  placeholder="أدخل الاسم الأول"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={isSubmitted}
                />
              </div>
              <div>
                <Label htmlFor="lastName">الاسم الأخير</Label>
                <Input
                  id="lastName"
                  placeholder="أدخل الاسم الأخير"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={isSubmitted}
                />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="phone">رقم هاتف المستلم</Label>
              <Input
                id="phone"
                placeholder="أدخل رقم الهاتف"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isSubmitted}
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="city">المدينة</Label>
              <Input
                id="city"
                placeholder="أدخل المدينة"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={isSubmitted}
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="address">العنوان بالتفصيل</Label>
              <Textarea
                id="address"
                placeholder="أدخل العنوان بالتفصيل"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled={isSubmitted}
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="notes">
                هل لديكم أي ملاحظات أو طلب؟ (اختياري)
              </Label>
              <Textarea
                id="notes"
                placeholder="أدخل أي ملاحظات إضافية - يمكنكم إضافة رقم تواصل إضافي"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                disabled={isSubmitted}
              />
            </div>
            <Button
              type="submit"
              className={`mt-3 w-full ${
                isSubmitted ? "bg-green-600 hover:bg-green-600" : ""
              }`}
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              ) : null}
              {isSubmitted
                ? "تم تقديم الطلب بنجاح"
                : isSubmitting
                  ? "جاري التحميل..."
                  : "إتمام الطلب"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderForm;
