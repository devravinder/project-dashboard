import tw from "tailwind-styled-components";


export const Chip = tw.span<{$active?: boolean, $clickable?: boolean, $rounded?: boolean}>`
inline-flex items-center justify-center gap-2 text-xs px-2 py-1 transition-colors
${p=>p.$rounded ? 'rounded-full' : 'rounded-md'}
${p=>p.$active ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}
${p=>p.$clickable ? 'cursor-pointer' : ''}
`