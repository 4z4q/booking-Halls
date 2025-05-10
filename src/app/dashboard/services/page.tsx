import { columns } from "@/components/dashboard-components/services-component/columns";
import { DataTable } from "@/components/dashboard-components/shared/data-table";
import { TasksPrimaryButtons } from "@/components/dashboard-components/tasks-primary-buttons";

async function getData(): Promise<ServicesType[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "قاعة الفخامة",
      location: "الرياض",
      price: 5000,
      capacity: 300,
      rating: 4.5,
      type: "halls",
      image: "/pexels-bertellifotografia-17023018.jpg",
      description: "قاعة فاخرة للمناسبات الكبيرة",
    },
  ];
}
const page = async () => {
  const data = await getData();
  return (
    <div className="container w-full h-full py-6 overflow-hidden ">
      <div className="mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight ">خدماتي </h2>
          <p className="text-muted-foreground">
            أضف خدماتك وابدأ في جذب العملاء! هنا يمكنك إدارة جميع خدماتك بكل
            مرونة وسهولة.
          </p>
        </div>
        <TasksPrimaryButtons />
      </div>

      <div className="-mx-4 flex-1 overflow-auto py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
        <DataTable data={data} columns={columns} placeholder="name" />
      </div>
    </div>
  );
};

export default page;
