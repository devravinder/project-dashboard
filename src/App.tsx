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
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const { allTags, allCategories, allTechnologies, filteredRepositories } = useRepositoryFilters(
    repositories,
    searchQuery,
    selectedTags,
    selectedTechnologies,
    selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Repository Dashboard</h1>
          <div className="space-y-6">

            <div className="flex flex-col gap-4 shadow-md p-6 bg-white rounded-md">
              <SearchBar
                onSearch={setSearchQuery}
                placeholder="Search..."
              />

              <FilterSection title="Category">
                <CategoryFilter
                  categories={allCategories}
                  selectedCategory={selectedCategory}
                  onCategorySelect={setSelectedCategory}
                />
              </FilterSection>

              <FilterSection title="Tags">
                <TagFilter
                  rounded={true}
                  icons={true}
                  tags={allTags}
                  selectedTags={selectedTags}
                  onTagSelect={(tag) => setSelectedTags([...selectedTags, tag])}
                  onTagRemove={(tag) => setSelectedTags(selectedTags.filter(t => t !== tag))}
                />
              </FilterSection>

              <FilterSection title="Technologies">
                <TagFilter
                  tags={allTechnologies}
                  selectedTags={selectedTechnologies}
                  onTagSelect={(tech) => setSelectedTechnologies([...selectedTechnologies, tech])}
                  onTagRemove={(tech) => setSelectedTechnologies(selectedTechnologies.filter(t => t !== tech))}
                />
              </FilterSection>
            </div>

            <RepositoryGrid repositories={filteredRepositories} />
          </div>
        </div>
      </div>
    </div>
  )
}
