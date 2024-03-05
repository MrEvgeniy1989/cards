import { useState } from 'react'

import { Page } from '@/common/components/ui/page'
import { Pagination } from '@/common/components/ui/pagination'
import { useGetDecksQuery } from '@/feature/decks/api/decksApi'
import { DecksHeader } from '@/feature/decks/ui/decksHeader/DecksHeader'
import { DecksPanel } from '@/feature/decks/ui/decksPanel/DecksPanel'
import { DecksTable } from '@/feature/decks/ui/decksTable/DecksTable'

import s from '@/pages/decks/decksPage.module.scss'

export type CardsCountType = {
  max: number | undefined
  min: number
}
type Props = {}

export const DecksPage = ({}: Props) => {
  // const dispatch = useDispatch()
  const [pageSize, setPageSize] = useState(10) // TODO
  const [currentPage, setCurrentPage] = useState(1)
  const [sliderRangeValue, setSliderRangeValue] = useState<CardsCountType>({
    max: undefined,
    min: 0,
  })
  const { currentData, data, error, isLoading } = useGetDecksQuery({
    currentPage: currentPage,
    itemsPerPage: 10,
  }) //TODO

  const onChangePageSize = (value: string) => {
    setPageSize(Number(value))
  }
  const onChangeSliderValueCallback = (sliderValues: number[]) => {
    setSliderRangeValue({ max: sliderValues[1], min: sliderValues[0] })
    // dispatch(setCardsCount({ cardsCount: { max: sliderValues[1], min: sliderValues[0] } }))
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h2>Error: {JSON.stringify(error)} ...</h2>
  }

  return (
    <Page className={s.decksPage}>
      <DecksHeader isDisabled={false} />
      <DecksPanel
        inputValue={''}
        maxSliderValue={100}
        minSliderValue={0}
        onChangeInputValue={() => {}}
        onChangeSliderValue={onChangeSliderValueCallback}
        onChangeTabValue={() => {}}
        onClearFilter={() => {}}
        sliderLabel={'Number of cards'}
        sliderValue={[
          25,
          // sliderRangeValue?.min ?? 0,
          // sliderRangeValue?.max ?? currentData?.maxCardsCount ?? 0,
          75,
        ]}
        tabLabel={''}
        tabValue={'1'}
      />
      {currentData && currentData.items.length > 0 && (
        <>
          <DecksTable decksData={currentData} />
          <Pagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            options={[
              { title: '10', value: '10' },
              { title: '5', value: '5' },
            ]}
            pageSize={pageSize}
            totalCount={data?.pagination?.totalItems ?? 1}
          />
        </>
      )}
    </Page>
  )
}
