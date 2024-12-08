import tw from 'tailwind-styled-components'

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategorySelect,
}:CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => onCategorySelect(null)} $active={selectedCategory === null}>All</Button>
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategorySelect(category)}
          $active={selectedCategory === category}>
          {category}
        </Button>
      ))}
    </div>
  );
};

const Button = tw.button<{ $active?: boolean }>`px-3 py-1 rounded-md text-sm font-medium ${(p)=>p.$active ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`