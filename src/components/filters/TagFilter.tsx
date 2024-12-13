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
        {tags
          .map((tag) => {
            const selected = selectedTags.includes(tag);
            return (
              <Chip
                key={tag}
                onClick={() => selected ? onTagRemove(tag) : onTagSelect(tag)}
                $clickable={true}
                $active={selected}
              >
                {tag}
              </Chip>
            )
          })}
      </div>
    </div>
  );
};
