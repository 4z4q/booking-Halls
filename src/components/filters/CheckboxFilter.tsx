"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const CheckboxFilter = ({
  title,
  options,
  prefix,
  setLocation,
}: {
  title: string;
  options: string[];
  prefix: string;
  setLocation: (value: string) => void;
}) => {
  const handleCheckboxChange = (option: string) => {
    console.log(option);
    setLocation((prev) => (prev === option ? "" : option));
  };

  return (
    <div className="rounded-lg border p-4 space-y-4">
      <h3 className="font-medium">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`${prefix}-${option}`}
              value={option}
              // onCheckedChange={ handleCheckboxChange(option)}
              onClick={() => handleCheckboxChange(option)}
            />
            <Label className="pr-1" htmlFor={`${prefix}-${option}`}>
              {option}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};
