"use client";
import { useDialogContext } from "@/context/tasks-context";
import { DashBoardMutateDrawer } from "./dash-mutate-drawer";

export function DashDialogs() {
  const { open, setCurrentRow, setOpen, currentRow } = useDialogContext();
  console.log(currentRow);
  return (
    <div>
      {currentRow ? (
        <DashBoardMutateDrawer
          open={open === "update"}
          onOpenChange={() => {
            setOpen("update");
            setCurrentRow(null);
          }}
          currentRow={currentRow!}
        />
      ) : null}
    </div>
  );
}
