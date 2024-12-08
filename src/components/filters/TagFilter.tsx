import IconClose from '../icons/IconClose';
import { Chip } from '../Common';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
  onTagRemove: (tag: string) => void;
}

export const TagFilter = ({
  tags,
  selectedTags,
  onTagSelect,
  onTagRemove,
}: TagFilterProps) => {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {selectedTags.map((tag) => (
          <Chip key={tag} $active={true}>
            <span>{tag}</span>
            <IconClose onClick={() => onTagRemove(tag)} className="h-3 w-3 cursor-pointer" />
          </Chip>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags
          .filter((tag) => !selectedTags.includes(tag))
          .map((tag) => (
            <Chip
              key={tag}
              onClick={() => onTagSelect(tag)}
              $clickable={true}
            >
              {tag}
            </Chip>
          ))}
      </div>
    </div>
  );
};
