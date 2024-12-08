import { useMemo } from 'react';

export function useRepositoryFilters(
  repositories: Repository[],
  searchQuery: string,
  selectedTags: string[],
  selectedTechnologies: string[],
  selectedCategory: string | null
) {
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    repositories.forEach((repo) => repo.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, [repositories]);

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    repositories.forEach((repo) => repo.technologies.forEach((tech) => techs.add(tech.name)));
    return Array.from(techs);
  }, [repositories]);

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    repositories.forEach((repo) => categories.add(repo.category));
    return Array.from(categories);
  }, [repositories]);

  const filteredRepositories = useMemo(() => {
    return repositories.filter((repo) => {
      const {name, description, technologies, tags, category } = repo
      const query = searchQuery.toLocaleLowerCase()

      const matchesSearch = searchQuery === '' || 
        name.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query)
        

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.every(tag => tags.includes(tag));

      const matchedTechnologies = selectedTechnologies.length === 0 ||
        selectedTechnologies.every(tech => technologies.some(technology => technology.name === tech));   

      const matchesCategory = !selectedCategory || category === selectedCategory;

      return matchesSearch && matchesTags && matchedTechnologies && matchesCategory;
    });
  }, [repositories, searchQuery, selectedTags, selectedTechnologies, selectedCategory]);

  return {
    allTags,
    allTechnologies,
    allCategories,
    filteredRepositories
  };
}