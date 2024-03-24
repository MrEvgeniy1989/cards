import { useEffect } from 'react'

import { LinearProgressBar } from '@/common/components/ui/linearProgressBar'
import { Page } from '@/common/components/ui/page'
import { Pagination } from '@/common/components/ui/pagination'
import { Table } from '@/common/components/ui/table'
import { useDebounce } from '@/common/hooks/useDebounce'
import { formatSortedString } from '@/common/utils/formatSortedString/formatSortedString'
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/feature/decks/api/decksApi'
import { useDecksOptions } from '@/feature/decks/hooks/useDecksOptions'
import { DecksHeader } from '@/feature/decks/ui/decksHeader/DecksHeader'
import { DecksPanel } from '@/feature/decks/ui/decksPanel/DecksPanel'
import { DecksTable } from '@/feature/decks/ui/decksTable/DecksTable'

import s from '@/pages/decksPage/decksPage.module.scss'

export const DecksPage = () => {
  const {
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
  } = useDecksOptions()

  const debouncedSearchName = useDebounce(searchName)
  const debouncedSliderRangeValue = useDebounce(sliderRangeValue)

  const sortedString = formatSortedString(sortOptions)
  const { data, isFetching, isLoading } = useGetDecksQuery({
    authorId,
    currentPage,
    itemsPerPage: pageSize,
    maxCardsCount: debouncedSliderRangeValue.max,
    minCardsCount: debouncedSliderRangeValue.min,
    name: debouncedSearchName,
    orderBy: sortedString,
  })
  const { data: minMaxData } = useGetMinMaxCardsQuery()

  useEffect(() => {
    if (
      debouncedSliderRangeValue.max === undefined ||
      debouncedSliderRangeValue.max === null ||
      debouncedSliderRangeValue.max !== minMaxData?.max ||
      !minMaxData?.max
    ) {
      onChangeSliderValueCallback([0, minMaxData?.max ?? 0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minMaxData?.max])

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
          minSliderValue={Number(minMaxData?.min)}
          onChangeInputValue={onSearchCallback}
          onChangeSliderValue={onChangeSliderValueCallback}
          onChangeTabValue={onChangeTabValueCallback}
          onClearFilter={onClearFilterCallback}
          sliderLabel={'Number of cards'}
          sliderValue={[sliderRangeValue?.min ?? 0, sliderRangeValue?.max ?? minMaxData?.max ?? 0]}
          tabLabel={'Show decks cards'}
          tabValue={tabValue}
        />
        {data && data.items.length > 0 ? (
          <>
            <DecksTable
              decksData={data}
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
        ) : (
          <Table.Empty text={'Your Decks list is empty. Click Add New Deck to fill this deck.'} />
        )}
      </Page>
    </>
  )
}
