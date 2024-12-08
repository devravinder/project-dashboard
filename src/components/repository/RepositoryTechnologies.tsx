import { Chip } from "../Common";

interface RepositoryTechnologiesProps {
  technologies: Technology[];
}

export const RepositoryTechnologies: React.FC<RepositoryTechnologiesProps> = ({ technologies }) => {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Chip
            key={tech.name}
            $active={true}
          >
            {tech.name}
          </Chip>
        ))}
      </div>
    </div>
  );
};