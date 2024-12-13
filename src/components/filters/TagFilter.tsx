import { Chip } from '../Common';
import IconTag from '../icons/IconTag';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
  onTagRemove: (tag: string) => void;
  icons?: boolean;
  rounded?: boolean
}

export const TagFilter = ({
  tags,
  selectedTags,
  onTagSelect,
  onTagRemove,
  icons = false,
  rounded = false
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
                $rounded={rounded}
              >
                {icons && <IconTag className='w-4 h-4' />}
                {tag}
              </Chip>
            )
          })}
      </div>
    </div>
  );
};
