import { SVGProps, memo } from 'react'
export const RightArrowIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={16} width={16} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g clipPath={'url(#a)'}>
      <path
        d={
          'M6.667 12.667a.667.667 0 0 1-.514-1.094L9.14 8 6.26 4.42a.667.667 0 0 1 .1-.94.667.667 0 0 1 .973.1l3.22 4a.666.666 0 0 1 0 .847l-3.333 4a.666.666 0 0 1-.553.24Z'
        }
        fill={'currentColor'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h16v16H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
))
