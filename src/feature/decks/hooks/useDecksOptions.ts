import { useState } from 'react'

import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { useAppSelector } from '@/common/hooks/useAppSelector'
import { useMeQuery } from '@/feature/auth/api/authApi'
import { Sort } from '@/feature/decks/api/decksApi.types'
import {
  selectAuthorId,
  selectCardsCount,
  selectCurrentPage,
  selectPageOptions,
  selectPageSize,
  selectSearchName,
  selectSortOptions,
  selectTabValue,
} from '@/feature/decks/model/decksSelectors'
import { CardsCountType, decksActions } from '@/feature/decks/model/decksSlice'

export const useDecksOptions = () => {
  const searchName = useAppSelector(selectSearchName)
  const tabValue = useAppSelector(selectTabValue)
  const cardsCount = useAppSelector(selectCardsCount)
  const authorId = useAppSelector(selectAuthorId)
  const sortOptions = useAppSelector(selectSortOptions)
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSize = useAppSelector(selectPageSize)
  const pageOptions = useAppSelector(selectPageOptions)

  const [sliderRangeValue, setSliderRangeValue] = useState<CardsCountType>({
    max: undefined,
    min: 0,
  })

  const {
    clearFilters,
    resetCurrentPage,
    setAuthorId,
    setCardsCount,
    setCurrentPage,
    setPageSize,
    setSearchByName,
    setSortOptions,
    setTabValue,
  } = decksActions

  const dispatch = useAppDispatch()

  const { data: user } = useMeQuery()

  const onSearchCallback = (name: string) => {
    dispatch(setSearchByName({ searchName: name }))
    dispatch(resetCurrentPage())
  }

  const onChangeTabValueCallback = (tabValue: string) => {
    dispatch(resetCurrentPage())
    dispatch(setTabValue({ tabValue }))

    if (tabValue === 'my') {
      dispatch(setAuthorId({ authorId: user?.id }))
    } else {
      dispatch(setAuthorId({ authorId: undefined }))
    }
  }

  const onChangeSliderValueCallback = (sliderValues: number[]) => {
    dispatch(resetCurrentPage())
    setSliderRangeValue({ max: sliderValues[1], min: sliderValues[0] })
    setCardsCount({ cardsCount: { max: sliderValues[1], min: sliderValues[0] } })
  }

  const onChangeSortCallback = (orderBy: Sort) => {
    dispatch(setSortOptions({ sortOptions: orderBy }))
  }

  const onClearFilterCallback = () => {
    dispatch(clearFilters())
    setSliderRangeValue({ max: undefined, min: 0 })
  }

  const onChangeCurrentPageCallback = (currentPage: number) => {
    dispatch(setCurrentPage({ currentPage }))
  }

  const onChangePageSizeCallback = (pageSize: string) => {
    dispatch(setPageSize({ pageSize: Number(pageSize) }))
  }

  return {
    authorId,
    cardsCount,
    currentPage,
    onChangeCurrentPageCallback,
    onChangePageSizeCallback,
    onChangeSliderValueCallback,
    onChangeSortCallback,
    onChangeTabValueCallback,
    onClearFilterCallback,
    onSearchCallback,
    pageOptions,
    pageSize,
    searchName,
    setCardsCount,
    sliderRangeValue,
    sortOptions,
    tabValue,
  }
}
