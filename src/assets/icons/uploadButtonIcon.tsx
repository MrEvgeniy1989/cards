import { SVGProps, memo } from 'react'

export const UploadButtonIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={16} width={17} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g clipPath={'url(#a)'} fill={'#fff'}>
      <path
        d={
          'M12.5 2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-8 1.333h8a.667.667 0 0 1 .667.667v5.573l-2.134-1.82a1.847 1.847 0 0 0-2.346 0L3.833 11.8V4a.667.667 0 0 1 .667-.667Zm8 9.334H4.873L9.54 8.773a.52.52 0 0 1 .62 0l3.007 2.56V12a.667.667 0 0 1-.667.667Z'
        }
      />
      <path d={'M5.833 6.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'} />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M.5 0h16v16H.5z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
))
