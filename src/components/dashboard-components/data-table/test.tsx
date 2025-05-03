"use client";
import { DashBoardMutateDrawer } from "./dash-mutate-drawer";

const Test = () => {
  const data = [
    {
      id: "BKG-005",
      customer: "عبدالله محمد",
      service: "قاعة الورود",
      eventDate: new Date(),
      status: "pending", // Add type assertion
      paymentMethod: "تحويل بنكي",
      amount: 600,
      email: "skodr@gmail.com",
    },
  ];
  return (
    <div>
      <DashBoardMutateDrawer
        open={true}
        onOpenChange={() => console.log("Drawer open change")}
        currentRow={data[0]}
      />
    </div>
  );
};

export default Test;
