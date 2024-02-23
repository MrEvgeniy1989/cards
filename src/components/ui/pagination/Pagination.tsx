import { LeftArrowIcon } from '@/assets/icons/leftArrowIcon'
import { RightArrowIcon } from '@/assets/icons/rightArrowIcon'
import { MySelect, SelectProps } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

import s from './pagination.module.scss'

import { usePagination } from './usePagination'

export type PaginationProps = {
  currentPage: number
  onPageChange: (pageNumber: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
} & SelectProps

export const Pagination = ({
  currentPage,
  onPageChange,
  pageSize,
  siblingCount = 1,
  totalCount,
  ...restProps
}: PaginationProps) => {
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const paginationItems = usePagination({ currentPage, siblingCount, totalPageCount })

  const setPrevPage = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1)
    }
  }
  const setNextPage = () => {
    if (currentPage !== totalPageCount) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className={s.root}>
      <div className={s.paginationContainer}>
        <button
          className={`${s.controller} ${currentPage === 1 && s.disabledController}`}
          onClick={setPrevPage}
          tabIndex={0}
        >
          <LeftArrowIcon />
        </button>
        {paginationItems.map((num, index) => {
          if (num === '...') {
            return (
              <button className={s.dots} key={index} tabIndex={-1}>
                {num}
              </button>
            )
          } else {
            return (
              <button
                className={`${s.item} ${num === currentPage && s.activeItem}`}
                key={index}
                onClick={() => onPageChange(num)}
                tabIndex={0}
              >
                <Typography as={'span'} variant={'body2'}>
                  {num}
                </Typography>
              </button>
            )
          }
        })}
        <button
          className={`${s.controller} ${currentPage === totalPageCount && s.disabledController}`}
          onClick={setNextPage}
          tabIndex={0}
        >
          <RightArrowIcon />
        </button>
      </div>
      <div className={s.selectContainer}>
        <Typography as={'span'} variant={'body2'}>
          Показать
        </Typography>
        <MySelect className={s.select} {...restProps} />
        <Typography as={'span'} variant={'body2'}>
          на странице
        </Typography>
      </div>
    </div>
  )
}
