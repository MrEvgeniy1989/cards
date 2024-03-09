import { SVGProps, memo } from 'react'
export const BackIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={10} width={12} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M10.667 4.333H2.76l2.42-2.906A.668.668 0 0 0 4.153.573l-3.333 4a.794.794 0 0 0-.06.1c0 .034 0 .054-.047.087A.667.667 0 0 0 .667 5c0 .082.016.164.046.24 0 .033 0 .053.047.087a.794.794 0 0 0 .06.1l3.333 4a.667.667 0 0 0 1.027-.854L2.76 5.667h7.907a.667.667 0 1 0 0-1.334Z'
      }
      fill={'currentColor'}
    />
  </svg>
))
