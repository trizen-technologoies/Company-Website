import {
  Globe, Smartphone, Bot, Workflow, Boxes, ShieldCheck, LineChart, type LucideIcon,
} from "lucide-react";

/** Icon per service, keyed by `services[].id` in content.ts. */
export const serviceIcons: Record<string, LucideIcon> = {
  web: Globe,
  mobile: Smartphone,
  ai: Bot,
  automation: Workflow,
  arvr: Boxes,
  qa: ShieldCheck,
  seo: LineChart,
};
