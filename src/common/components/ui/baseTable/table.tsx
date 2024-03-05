import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  ReactNode,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from '@/common/components/ui/baseTable/baseTable.module.scss'

import { Typography } from '../typography'

export type RootProps = ComponentProps<'table'>

export const Root: FC<RootProps> = ({ className, ...rest }) => {
  const classNames = {
    table: clsx(className, s.table),
  }

  return <table className={classNames.table} {...rest} />
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = props => {
  return <thead {...props} />
}

export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = props => {
  return <tbody {...props} />
}

export type RowProps = ComponentProps<'tr'>

export const Row: FC<RowProps> = props => {
  return <tr {...props} className={s.row} />
}

export type HeadCellProps = ComponentProps<'th'>

export const HeadCell: FC<HeadCellProps> = ({ className, ...rest }) => {
  const classNames = {
    headCell: clsx(className, s.headCell),
  }

  return <th className={classNames.headCell} {...rest} />
}

export type CellProps = ComponentProps<'td'>

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  const classNames = {
    cell: clsx(className, s.tableCell),
  }

  return <td className={classNames.cell} {...rest} />
}

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

export const Table = {
  Body,
  Cell,
  Empty,
  Head,
  HeadCell,
  Root,
  Row,
}
