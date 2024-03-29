import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/common/components/ui/typography'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from '@/common/components/ui/slider/slider.module.scss'

export type SliderProps = { label?: string } & ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

export const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, label, ...restProps }, ref) => {
    return (
      <div className={clsx(s.sliderWrapping, className)}>
        {label && (
          <Typography as={'label'} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={s.container}>
          <Typography as={'div'} className={s.valueDisplay} variant={'body1'}>
            {restProps?.value?.[0]}
          </Typography>
          <SliderPrimitive.Root className={s.root} ref={ref} {...restProps}>
            <SliderPrimitive.Track className={s.track}>
              <SliderPrimitive.Range className={s.range} />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb aria-label={'Value min'} className={s.thumb} />
            <SliderPrimitive.Thumb aria-label={'Value max'} className={s.thumb} />
          </SliderPrimitive.Root>
          <Typography as={'div'} className={s.valueDisplay} variant={'body1'}>
            {restProps?.value?.[1]}
          </Typography>
        </div>
      </div>
    )
  }
)
