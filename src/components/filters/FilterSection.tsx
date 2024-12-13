import { ReactNode } from "react";

interface FilterSectionProps {
  title: string | ReactNode;
  children: React.ReactNode;
}

export const FilterSection = ({ title, children }: FilterSectionProps) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {title}
      </label>
      {children}
    </div>
  );
};