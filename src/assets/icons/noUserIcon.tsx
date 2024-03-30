import { SVGProps, memo } from 'react'
export const NoUserIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    height={36}
    viewBox={'0 0 389.34 389.34'}
    width={36}
    xmlSpace={'preserve'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M347.415 330.3v.13c-40.37 36.61-93.96 58.91-152.74 58.91-58.79 0-112.38-22.3-152.75-58.91v-.13c0-60.89 35.63-113.45 87.17-137.98 19.37 19.32 42.05 29.73 65.58 29.73 23.54 0 46.21-10.41 65.59-29.73 51.54 24.53 87.15 77.09 87.15 137.98z'
      }
      style={{
        fill: 'var(--color-accent-500)',
      }}
    />
    <path
      d={
        'M194.675 0c46.66 0 84.49 37.82 84.49 84.48 0 46.67-37.83 110.49-84.49 110.49s-84.49-63.82-84.49-110.49c0-46.66 37.83-84.48 84.49-84.48z'
      }
      style={{
        fill: 'var(--color-user-head)',
      }}
    />
  </svg>
))
