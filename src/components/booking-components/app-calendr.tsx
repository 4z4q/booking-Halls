"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { ar } from "date-fns/locale";
import { CalendarIcon } from "lucide-react"; // استيراد الأيقونة

const AppCalendr = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

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
        <div className="relative mt-2 duration-300 transition-all ease-in-out">
          <div
            className={`absolute ${
              showCalendar
                ? "translate-y-0 top-1/2 left-1/2 -translate-x-1/2 "
                : "-translate-y-full"
            }`}
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                setShowCalendar(false);
              }}
              className="border rounded-md shadow-lg bg-white p-2 flex justify-center items-center"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AppCalendr;
