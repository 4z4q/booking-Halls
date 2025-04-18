import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export const SelectFilter = ({
  title,
  options,
  setCapacity
}: {
  title: string;
  options: { label: string; value: string }[];
  setCapacity: (value: string) => void;
}) => {
  const handleChange = (value: string) => {
    setCapacity(value);
    console.log(value)
  }
  return (
    <div className="rounded-lg border p-4 space-y-4">
      <h3 className="font-medium">{title}</h3>
      <Select onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder={`اختر ${title}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
