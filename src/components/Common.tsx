import tw from "tailwind-styled-components";


export const Chip = tw.span<{$active?: boolean, $clickable?: boolean}>`flex flex-row gap-1 items-center justify-between px-2 py-0.5 rounded-full text-xs font-medium 
 ${p => p.$active ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}
 ${p => p.$clickable ? 'hover:bg-gray-200 cursor-pointer' : ''}
 `