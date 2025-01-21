import { Html, Head, Body, Section, Text } from "@react-email/components";
import * as React from "react";

interface OrderDetails {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
  quantity: number;
  totalPrice: number;
}

const EmailTemplate: React.FC<OrderDetails> = ({
  firstName,
  lastName,
  phone,
  city,
  address,
  notes,
  quantity,
  totalPrice,
}) => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            font-family: 'Rubik', Arial, sans-serif;
            background-color: #f9fafb;
            color: #111827;
            margin: 0;
            padding: 0;
          }
          .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 24px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .section-title {
            font-size: 20px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 16px;
          }
          .section-content {
            font-size: 16px;
            color: #374151;
            margin-bottom: 12px;
            line-height: 1.5;
          }
          .label {
            font-weight: 500;
            color: #6b7280;
            display: block;
            margin-bottom: 4px;
          }
          .value {
            font-weight: 400;
            color: #111827;
            display: block;
            margin-bottom: 12px;
          }
          .order-total {
            font-size: 18px;
            font-weight: 600;
            color: #1f2937;
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid #e5e7eb;
          }
          .button {
            display: inline-block;
            background-color: #3b82f6;
            color: #ffffff;
            padding: 12px 24px;
            text-decoration: none;
            font-weight: 600;
            border-radius: 6px;
            margin-top: 24px;
          }
        `}</style>
      </Head>
      <Body>
        <div className="email-container">
          <Section>
            <Text className="section-title">بيانات العميل</Text>
            <Text className="section-content">
              <span className="label">الاسم</span>
              <span className="value">
                {firstName} {lastName}
              </span>
            </Text>
            <Text className="section-content">
              <span className="label">رقم الهاتف</span>
              <span className="value">{phone}</span>
            </Text>
            <Text className="section-content">
              <span className="label">المدينة</span>
              <span className="value">{city}</span>
            </Text>
            <Text className="section-content">
              <span className="label">العنوان</span>
              <span className="value">{address}</span>
            </Text>
            <Text className="section-content">
              <span className="label">ملاحظات</span>
              <span className="value">{notes || "لا توجد ملاحظات"}</span>
            </Text>
          </Section>
          <Section>
            <Text className="section-title">تفاصيل الطلب</Text>
            <Text className="section-content">
              <span className="label">الكمية</span>
              <span className="value">{quantity}</span>
            </Text>
            <Text className="order-total">
              <span className="label">السعر الكلي</span>
              <span className="value">{totalPrice} ريال</span>
            </Text>
          </Section>
        </div>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
