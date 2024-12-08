import { useState } from 'react';
import { SearchBar } from './components/filters/SearchBar';
import { TagFilter } from './components/filters/TagFilter';
import { CategoryFilter } from './components/filters/CategoryFilter';
import { FilterSection } from './components/filters/FilterSection';
import { RepositoryGrid } from './components/repository/RepositoryGrid';
import { repositories } from './data/repositories';
import { useRepositoryFilters } from './hooks/useRepositoryFilters';


export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { allTags, allCategories, filteredRepositories } = useRepositoryFilters(
    repositories,
    searchQuery,
    selectedTags,
    selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Repository Dashboard</h1>
          <div className="space-y-6">
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="Search repositories, technologies..."
          />
          
          <FilterSection title="Categories">
            <CategoryFilter
              categories={allCategories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </FilterSection>
          
          <FilterSection title="Tags">
            <TagFilter
              tags={allTags}
              selectedTags={selectedTags}
              onTagSelect={(tag) => setSelectedTags([...selectedTags, tag])}
              onTagRemove={(tag) => setSelectedTags(selectedTags.filter(t => t !== tag))}
            />
          </FilterSection>
          
          <RepositoryGrid repositories={filteredRepositories} />
        </div>
        </div>
      </div>
    </div>
  )
}
