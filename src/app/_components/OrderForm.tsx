"use client";
import React, { useState } from "react";
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

const OrderForm = () => {
  const [quantity, setQuantity] = useState<number>(1);

  // Function to calculate the price per item based on the quantity
  const getItemPrice = (): number => {
    if (quantity === 1) return 170;
    if (quantity === 2) return 150;
    if (quantity >= 3) return 145;
    return 170; // Default fallback
  };

  // Calculate the total price
  const calculateTotalPrice = (): number => {
    return getItemPrice() * quantity;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تم تقديم الطلب بنجاح!");
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
              onValueChange={(value: unknown) => setQuantity(Number(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر الكمية" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">قطعة واحدة</SelectItem>
                <SelectItem value="2">قطعتان - خصم 40 ريال</SelectItem>
                <SelectItem value="3">ثلاثة قطع - خصم 75 ريال</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Pricing display */}
          <div className="space-y-2 mb-6">
            <p>
              سعر القطعة:{" "}
              <span className="font-bold text-pink-600">
                {getItemPrice()} ريال
              </span>
            </p>
            <p>
              السعر الكلي:{" "}
              <span className="font-bold text-green-600">
                {calculateTotalPrice()} ريال + شحن مجاني
              </span>
            </p>
          </div>

          {/* Shipping form */}
          <form onSubmit={handleSubmit}>
            <h3 className="mb-4 font-semibold text-lg">معلومات الشحن</h3>
            <div className="gap-4 grid grid-cols-2">
              <div>
                <Label htmlFor="firstName">الاسم الأول</Label>
                <Input id="firstName" placeholder="أدخل الاسم الأول" required />
              </div>
              <div>
                <Label htmlFor="lastName">الاسم الأخير</Label>
                <Input id="lastName" placeholder="أدخل الاسم الأخير" required />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="phone">رقم هاتف المستلم</Label>
              <Input id="phone" placeholder="أدخل رقم الهاتف" required />
            </div>
            <div className="mt-4">
              <Label htmlFor="city">المدينة</Label>
              <Input id="city" placeholder="أدخل المدينة" required />
            </div>
            <div className="mt-4">
              <Label htmlFor="address">العنوان بالتفصيل</Label>
              <Textarea
                id="address"
                placeholder="أدخل العنوان بالتفصيل"
                required
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="notes">
                هل لديكم أي ملاحظات أو طلب؟ (اختياري)
              </Label>
              <Textarea
                id="notes"
                placeholder="أدخل أي ملاحظات إضافية - يمكنكم إضافة رقم تواصل إضافي"
              />
            </div>
            <Button type="submit" className="mt-3 w-full">
              إتمام الطلب
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderForm;
