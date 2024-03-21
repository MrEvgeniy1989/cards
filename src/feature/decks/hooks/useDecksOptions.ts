import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useMeQuery } from '@/feature/auth/api/authApi'
import { Sort } from '@/feature/decks/api/decksApi.types'

type PageOptionType = {
  title: string
  value: string
}
export type CardsCountType = {
  max: number | undefined
  min: number
}

export const useDecksOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams({})

  const currentPage = Number(searchParams.get('currentPage')) || 1
  const searchName = searchParams.get('searchName') || ''
  const tabValue = searchParams.get('tabValue') || 'all'
  const authorId = searchParams.get('authorId') || undefined
  const sortOptions = JSON.parse(searchParams.get('sortOptions') as string) ?? undefined
  const pageSize = Number(searchParams.get('pageSize')) || 10
  const pageOptions = [
    { title: '5', value: '5' },
    { title: '10', value: '10' },
    { title: '15', value: '15' },
  ] as PageOptionType[]

  const [sliderRangeValue, setSliderRangeValue] = useState<CardsCountType>({
    max: undefined,
    min: 0,
  })

  const { data: user } = useMeQuery()

  const onSearchCallback = (searchName: string) => {
    if (!searchName) {
      searchParams.delete('searchName')
    } else {
      searchParams.set('searchName', searchName)
    }
    searchParams.set('currentPage', '1')
    setSearchParams(searchParams)
  }

  const onChangeTabValueCallback = (tabValue: string) => {
    searchParams.set('tabValue', tabValue)
    if (tabValue === 'my') {
      searchParams.set('authorId', user?.id ?? '')
    } else {
      searchParams.delete('authorId')
    }
    searchParams.set('currentPage', '1')
    setSearchParams(searchParams)
  }

  const onChangeSliderValueCallback = (sliderValues: number[]) => {
    setSliderRangeValue({ max: sliderValues[1], min: sliderValues[0] })
    searchParams.set('minCardsCount', sliderValues[0].toString())
    searchParams.set('maxCardsCount', sliderValues[1].toString())
    searchParams.set('currentPage', '1')
    setSearchParams(searchParams)
  }

  const onChangeSortCallback = (orderBy: Sort) => {
    searchParams.set('sortOptions', JSON.stringify(orderBy))
    searchParams.set('currentPage', '1')
    setSearchParams(searchParams)
  }

  const onClearFilterCallback = () => {
    setSliderRangeValue({ max: undefined, min: 0 })
    searchParams.delete('minCardsCount')
    searchParams.delete('maxCardsCount')
    searchParams.delete('searchName')
    searchParams.delete('tabValue')
    searchParams.delete('authorId')
    searchParams.delete('sortOptions')
    searchParams.delete('pageSize')
    searchParams.set('currentPage', '1')
    setSearchParams(searchParams)
  }

  const onChangeCurrentPageCallback = (currentPage: number) => {
    searchParams.set('currentPage', currentPage.toString())
    setSearchParams(searchParams)
  }

  const onChangePageSizeCallback = (pageSize: string) => {
    searchParams.set('pageSize', pageSize)
    setSearchParams(searchParams)
  }

  return {
    authorId,
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
    sliderRangeValue,
    sortOptions,
    tabValue,
  }
}
