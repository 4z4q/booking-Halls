import {
  columns,
  Payment,
} from "@/components/dashboard-components/data-table/columns";
import { DataTable } from "@/components/dashboard-components/data-table/data-table";
import { TasksPrimaryButtons } from "@/components/dashboard-components/tasks-primary-buttons";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "BKG-001",
      customer: "محمد أحمد",
      service: "قاعة الزفاف الملكية",

      eventDate: new Date(),
      status: "pending",
      paymentMethod: "بطاقة ائتمان",
      amount: 500,
      email: "skodr@gmail.com",
    },
    {
      id: "BKG-002",
      customer: "ليلى يوسف",
      service: "قاعة النجوم",

      eventDate: new Date(),
      status: "confirmed",
      paymentMethod: "تحويل بنكي",
      amount: 750,
      email: "skodr@gmail.com",
    },
    {
      id: "BKG-003",
      customer: "سعيد عمر",
      service: "فرقة الطرب الكلاسيكية",

      eventDate: new Date(),
      status: "cancelled",
      paymentMethod: "دفع إلكتروني",
      amount: 300,
      email: "skodr@gmail.com",
    },
    {
      id: "BKG-004",
      customer: "هند العلي",
      service: "خدمة التصوير الفوتوغرافي",

      eventDate: new Date(),
      status: "pending",
      paymentMethod: "بطاقة ائتمان",
      amount: 400,
      email: "skodr@gmail.com",
    },
    {
      id: "BKG-005",
      customer: "عبدالله محمد",
      service: "قاعة الورود",

      eventDate: new Date(),
      status: "confirmed",
      paymentMethod: "تحويل بنكي",
      amount: 600,
      email: "skodr@gmail.com",
    },
    {
      id: "BKG-006",
      customer: "نورة سعيد",
      service: "تصميم ديكور الزفاف",

      eventDate: new Date(),
      status: "pending",
      paymentMethod: "دفع إلكتروني",
      amount: 450,
      email: "skodr@gmail.com",
    },
    {
      id: "BKG-007",
      customer: "علي فهد",
      service: "خدمة الفيديو والدرون",

      eventDate: new Date(),
      status: "confirmed",
      paymentMethod: "بطاقة ائتمان",
      amount: 800,
      email: "skodr@gmail.com",
    },
    {
      id: "BKG-008",
      customer: "منى تركي",
      service: "قاعة اللؤلؤة",

      eventDate: new Date(),
      status: "cancelled",
      paymentMethod: "تحويل بنكي",
      amount: 550,
      email: "skodr@gmail.com",
    },
    {
      id: "BKG-009",
      customer: "فيصل ناصر",
      service: "فرقة موسيقية شعبية",

      eventDate: new Date(),
      status: "pending",
      paymentMethod: "دفع إلكتروني",
      amount: 380,
      email: "skodr@gmail.com",
    },
    {
      id: "BKG-010",
      customer: "جميلة خالد",
      service: "قاعة السعادة",

      eventDate: new Date(),
      status: "confirmed",
      paymentMethod: "بطاقة ائتمان",
      amount: 700,
      email: "skodr@gmail.com",
    },
  ];
}
const page = async () => {
  const data = await getData();
  return (
    <div className="container w-full h-full py-6 ">
      <div className="mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">حجوزات</h2>
          <p className="text-muted-foreground">
            هنا لديك قائمة جميع الحجوزات الخاصة بك
          </p>
        </div>
        <TasksPrimaryButtons />
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
};

export default page;
