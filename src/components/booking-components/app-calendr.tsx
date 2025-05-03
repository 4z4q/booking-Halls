"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { ar, arSA } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";

const AppCalendr = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState<Date>();

  return (
    <>
      <Button
        variant="outline"
        className="w-full flex items-center justify-between gap-2"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <CalendarIcon className="h-4 w-4 text-gray-600" />
        <span className="text-gray-700">
          {date ? format(date, "PPP", { locale: ar }) : "اختر التاريخ"}
        </span>
      </Button>

      {showCalendar && (
        <div className="relative mt-2 duration-300 transition-all ease-in-out ">
          <div
            className={`absolute ${
              showCalendar
                ? "translate-y-0 top-1/2 left-1/2 -translate-x-1/2 "
                : "-translate-y-full"
            }`}
          >
            <DayPicker locale={arSA} dir="rtl" />;
            {/* <DayPicker
              animate
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={
                selected
                  ? `Selected: ${selected.toLocaleDateString()}`
                  : "Pick a day."
              }
            /> */}
            {/* <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                setShowCalendar(false);
              }}
              className="border rounded-md shadow-lg bg-white p-2 flex justify-center items-center"
            /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default AppCalendr;
