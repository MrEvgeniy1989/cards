import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={16} width={16} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g clipPath={'url(#a)'}>
      <path
        d={
          'M11.707 14.5a.666.666 0 0 1-.307-.073L8 12.647l-3.4 1.78a.666.666 0 0 1-.967-.707L4.3 9.967 1.553 7.3a.667.667 0 0 1-.166-.667.667.667 0 0 1 .54-.453l3.8-.553L7.4 2.207a.667.667 0 0 1 1.2 0l1.693 3.413 3.8.553a.667.667 0 0 1 .54.454.666.666 0 0 1-.166.666L11.72 9.96l.667 3.753a.666.666 0 0 1-.267.667.667.667 0 0 1-.413.12Z'
        }
        fill={'#E6AC39'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 .5h16v16H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)

export const Star = memo(SvgComponent)
