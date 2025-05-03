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


