interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FilterSection = ({ title, children }:FilterSectionProps) => {
  return (
    <div className="space-y-1">
      <h2 className="text-lg font-medium text-gray-900">{title}</h2>
      {children}
    </div>
  );
};