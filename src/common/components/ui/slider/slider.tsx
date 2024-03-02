import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect } from 'react'

import { Typography } from '@/common/components/ui/typography'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from '@/common/components/ui/slider/slider.module.scss'

type Props = Omit<ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value'> & {
  label?: string
  value: (null | number)[]
}

export const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Root>, Props>(
  ({ className = '', label, max, onValueChange, value = [], ...props }, ref) => {
    useEffect(() => {
      if (value?.[1] === undefined || value?.[1] === null) {
        onValueChange?.([value?.[0] ?? 0, max ?? 0])
      }
    }, [max, value, onValueChange])

    return (
      <div>
        {label && (
          <Typography as={'label'} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={s.container}>
          <span className={s.valueDisplay}>{value?.[0]}</span>
          <SliderPrimitive.Root
            className={clsx(s.root, className)}
            max={max}
            onValueChange={onValueChange}
            ref={ref}
            {...props}
            value={[value?.[0] ?? 0, value?.[1] ?? max ?? 0]}
          >
            <SliderPrimitive.Track className={s.track}>
              <SliderPrimitive.Range className={s.range} />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className={s.thumb} />
            <SliderPrimitive.Thumb className={s.thumb} />
          </SliderPrimitive.Root>
          <span className={s.valueDisplay}>{value?.[1]}</span>
        </div>
      </div>
    )
  }
)

Slider.displayName = SliderPrimitive.Root.displayName
