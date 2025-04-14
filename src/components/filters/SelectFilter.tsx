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
}: {
  title: string;
  options: { label: string; value: string }[];
}) => (
  <div className="rounded-lg border p-4 space-y-4">
    <h3 className="font-medium">{title}</h3>
    <Select>
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
