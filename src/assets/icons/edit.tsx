import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={16} width={16} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g clipPath={'url(#a)'} fill={'#fff'}>
      <path
        d={
          'M12.667 13.833H3.333a.667.667 0 1 0 0 1.334h9.334a.667.667 0 0 0 0-1.334ZM3.333 12.5h.06l2.78-.253c.305-.03.59-.165.807-.38l6-6a1.28 1.28 0 0 0-.047-1.807l-1.826-1.827a1.333 1.333 0 0 0-1.774-.046l-6 6c-.215.217-.35.502-.38.806l-.286 2.78a.667.667 0 0 0 .666.727Zm6.847-9.333L12 4.987l-1.333 1.3L8.88 4.5l1.3-1.333Zm-5.933 5.94L8 5.38l1.8 1.8-3.733 3.733-2 .187.18-1.993Z'
        }
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 .5h16v16H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)

export const EditIcon = memo(SvgComponent)
