"use client";
import ServiceForm from "@/components/dashboard-components/services-component/form";
import { serviceSchema } from "@/lib/validation";

const getData = () => {
  return [
    {
      name: "قاعة الزفاف الملكية",
      description:
        "قاعة فاخرة مصممة خصيصًا للمناسبات الفخمة، مزودة بأحدث التقنيات والخدمات لإحياء أجمل الليالي.",
      category: "قاعة",
      price: 5000,
      pricingType: "fixed", // "fixed" | "hour" | "day"
      city: "الرياض",
      address: "حي العليا، شارع الملك فهد",
      status: "active", // "active" | "pending" | "draft"
      location: "24.7136, 46.6753",
      capacity: 300,
      amenities: ["تكييف", "نظام صوت", "إضاءة حديثة", "مواقف سيارات"],
      gallery: [
        "https://example.com/images/hall1.jpg",
        "https://example.com/images/hall2.jpg",
        "https://example.com/images/hall3.jpg",
      ],
      availability: "طوال أيام الأسبوع ما عدا الجمعة",
    },
  ];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function EditPage({ params }: { params: { id: string } }) {
  const data = getData();

  const defaultValues = data[0];

  return (
    <div>
      <ServiceForm
        type="EDIT"
        schema={serviceSchema}
        defaultValues={defaultValues}
        onSubmit={async () => ({ success: true })}
      />
    </div>
  );
}
