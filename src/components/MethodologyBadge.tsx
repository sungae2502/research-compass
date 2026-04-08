import type { Methodology } from "@/data/research-data";

const colors: Record<Methodology, string> = {
  Qualitative: "bg-methodology-qualitative",
  Quantitative: "bg-methodology-quantitative",
  "Mixed Methods": "bg-methodology-mixed",
};

const MethodologyBadge = ({ methodology }: { methodology: Methodology }) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-primary-foreground ${colors[methodology]}`}
  >
    {methodology}
  </span>
);

export default MethodologyBadge;
