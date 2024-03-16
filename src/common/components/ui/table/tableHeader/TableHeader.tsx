import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDown } from '@/assets/icons/arrowDown'
import { ArrowUp } from '@/assets/icons/arrowUp'
import { Table } from '@/common/components/ui/table'
import { Typography } from '@/common/components/ui/typography'
import { Sort } from '@/feature/decks/api/decksApi.types'
import { ColumnData } from '@/feature/decks/ui/columnsData'
import { clsx } from 'clsx'

import s from '@/common/components/ui/table/tableHeader/tableHeader.module.scss'

type Props = Omit<
  ComponentPropsWithoutRef<typeof Table.Head> & {
    columns: ColumnData[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  },
  'children'
>

export const TableHeader = forwardRef<ElementRef<typeof Table.Head>, Props>(
  ({ columns, onSort, sort, ...restProps }: Props, ref) => {
    const onSortHandler = (key: string, sortable?: boolean) => () => {
      if (!onSort || !sortable) {
        return
      }

      if (sort?.key !== key) {
        return onSort({ direction: 'asc', key })
      }

      if (sort.direction === 'desc') {
        return onSort(null)
      }

      return onSort({
        direction: sort?.direction === 'asc' ? 'desc' : 'asc',
        key,
      })
    }

    return (
      <Table.Head ref={ref} {...restProps}>
        <Table.Row>
          {columns.map(({ className, key, sortable, title }) => {
            return (
              <Table.HeadCell
                className={clsx(className ? s[className] : '', sortable ? s.activeHeadCell : '')}
                key={key}
                onClick={onSortHandler(key, sortable)}
              >
                <Typography as={'span'} className={s.sortCell} variant={'subtitle2'}>
                  {title}
                  {sort?.key === key && (
                    <>
                      {sort.direction === 'asc' && <ArrowUp className={s.sortIcon} />}
                      {sort.direction !== 'asc' && <ArrowDown className={s.sortIcon} />}
                    </>
                  )}
                </Typography>
              </Table.HeadCell>
            )
          })}
        </Table.Row>
      </Table.Head>
    )
  }
)
