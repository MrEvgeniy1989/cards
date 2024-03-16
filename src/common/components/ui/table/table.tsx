import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from '@/common/components/ui/table/table.module.scss'

import { Typography } from '../typography'

const Root = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    return <table className={clsx(className, s.table)} ref={ref} {...rest} />
  }
)
const Head = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...restProps }, ref) => {
    return <thead className={clsx(className, s.headCell)} ref={ref} {...restProps} />
  }
)
const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...restProps }, ref) => {
    return <tbody className={clsx(s.body, className)} ref={ref} {...restProps} />
  }
)
const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...restProps }, ref) => {
    return <tr className={clsx(s.row, className)} ref={ref} {...restProps} />
  }
)
const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...restProps }, ref) => {
    return <th className={clsx(s.headCell, className)} ref={ref} {...restProps} />
  }
)
const Cell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...restProps }, ref) => {
    return <td className={clsx(s.cell, className)} ref={ref} {...restProps} />
  }
)

type EmptyProps = {
  children?: ReactNode
  className?: string
  text?: string
} & ComponentPropsWithoutRef<'div'>

const Empty = forwardRef<ElementRef<'div'>, EmptyProps>(
  (
    {
      children,
      className,
      text = 'This deck is empty. Click add new deck to fill this deck',
      ...restProps
    },
    ref
  ) => {
    const classNames = {
      emptyDescription: s.emptyDescription,
      root: clsx(s.empty, className),
    }

    return (
      <div className={classNames.root} ref={ref} {...restProps}>
        <Typography className={classNames.emptyDescription} variant={'body1'}>
          {text}
        </Typography>
        {children}
      </div>
    )
  }
)

export const Table = { Body, Cell, Empty, Head, HeadCell, Root, Row }
