"use client";
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export function TasksPrimaryButtons() {
  // const {  setRedirectUrl } = useUsers();
  const router = useRouter();
  return (
    <div className="flex gap-2">
      <Button variant="outline" className="space-x-1">
        <span>تضمين</span> <Download size={18} />
      </Button>
      <Button
        className="space-x-1"
        onClick={() => {
          router.push("/dashboard/services/create");
        }}
      >
        <span>أنشاء</span> <Plus size={18} />
      </Button>
    </div>
  );
}
