import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import {
  ClockIcon,
  LoaderIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "lucide-react";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "pending",
    label: "Pending",
    icon: ClockIcon,
  },
  {
    value: "processing",
    label: "Processing",
    icon: LoaderIcon,
  },
  {
    value: "confirmed",
    label: "Confirmed",
    icon: CheckCircleIcon,
  },
  {
    value: "cancelled",
    label: "Cancelled",
    icon: XCircleIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
  },
];
