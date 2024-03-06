import { useEffect } from 'react'

import { LinearProgressBar } from '@/common/components/ui/linearProgressBar'
import { Page } from '@/common/components/ui/page'
import { Pagination } from '@/common/components/ui/pagination'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { formatSortedString } from '@/common/utils/formatSortedString/formatSortedString'
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/feature/decks/api/decksApi'
import { useDecksOptions } from '@/feature/decks/hooks/useDecksOptions'
import { DecksHeader } from '@/feature/decks/ui/decksHeader/DecksHeader'
import { DecksPanel } from '@/feature/decks/ui/decksPanel/DecksPanel'
import { DecksTable } from '@/feature/decks/ui/decksTable/DecksTable'

import s from '@/pages/decks/decksPage.module.scss'

type Props = {}

export const DecksPage = ({}: Props) => {
  const {
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
  } = useDecksOptions()

  const dispatch = useAppDispatch()
  const sortedString = formatSortedString(sortOptions)

  const { currentData, data, isFetching, isLoading } = useGetDecksQuery({
    authorId,
    currentPage,
    itemsPerPage: pageSize,
    maxCardsCount: sliderRangeValue.max,
    minCardsCount: sliderRangeValue.min,
    name: searchName,
    orderBy: sortedString,
  })
  const { data: minMaxData } = useGetMinMaxCardsQuery()

  useEffect(() => {
    if (
      sliderRangeValue.max === undefined ||
      sliderRangeValue.max === null ||
      sliderRangeValue.max !== minMaxData?.max ||
      !minMaxData?.max
    ) {
      onChangeSliderValueCallback([0, minMaxData?.max ?? 0])
      dispatch(setCardsCount({ cardsCount: { max: minMaxData?.max ?? 0, min: 0 } }))
    }
    // eslint-disable-next-line
  }, [dispatch, setCardsCount, sliderRangeValue, minMaxData?.max])

  const loadingStatus = isLoading || isFetching

  return (
    <>
      {loadingStatus && <LinearProgressBar />}
      <Page className={s.decksPage}>
        <DecksHeader isDisabled={loadingStatus} />
        <DecksPanel
          className={s.panelWrapper}
          inputValue={searchName}
          isDisabled={loadingStatus}
          maxSliderValue={Number(minMaxData?.max)}
          minSliderValue={cardsCount.min}
          onChangeInputValue={onSearchCallback}
          onChangeSliderValue={onChangeSliderValueCallback}
          onChangeTabValue={onChangeTabValueCallback}
          onClearFilter={onClearFilterCallback}
          sliderLabel={'Number of cards'}
          sliderValue={[sliderRangeValue?.min ?? 0, sliderRangeValue?.max ?? minMaxData?.max ?? 0]}
          tabLabel={'Show decks cards'}
          tabValue={tabValue}
        />
        {currentData && currentData.items.length > 0 && (
          <>
            <DecksTable
              decksData={currentData}
              isDisabled={loadingStatus}
              onSort={onChangeSortCallback}
              sort={sortOptions}
            />
            <Pagination
              currentPage={currentPage}
              onPageChange={onChangeCurrentPageCallback}
              onValueChange={onChangePageSizeCallback}
              options={pageOptions}
              pageSize={pageSize}
              totalCount={data?.pagination.totalItems ?? 1}
              value={String(pageSize)}
            />
          </>
        )}
      </Page>
    </>
  )
}
