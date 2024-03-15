import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { GoBack } from '@/common/components/ui/goBack'
import { LinearProgressBar } from '@/common/components/ui/linearProgressBar'
import { Page } from '@/common/components/ui/page'
import { Pagination } from '@/common/components/ui/pagination'
import { Table } from '@/common/components/ui/table'
import { TextField } from '@/common/components/ui/textField'
import { useDebounce } from '@/common/hooks/useDebounce'
import { useMeQuery } from '@/feature/auth/api/authApi'
import { useGetCardsQuery } from '@/feature/cards/api/cardsApi'
import { CardsTable } from '@/feature/cards/ui/cardsTable/CardsTable'
import { useGetDeckByIdQuery } from '@/feature/decks/api/decksApi'
import { DeckPageHeader } from '@/pages/deckPage/deckPageHeader/DeckPageHeader'

import s from './DeckPage.module.scss'

type PaginationOptions = { title: string; value: string }[]

const paginationOptions = [
  { title: '5', value: '5' },
  { title: '10', value: '10' },
  { title: '15', value: '15' },
] as PaginationOptions

export const DeckPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams()
  const [question, setQuestion] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')

  const { id = '' } = useParams<{ id: string }>()
  const queryParams = {
    id,
    params: { currentPage, itemsPerPage: Number(pageSize), question: useDebounce(question, 500) },
  }

  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckByIdQuery({ id })
  const { data: deckData, isFetching, isLoading } = useGetCardsQuery(queryParams)

  const isOwner = user?.id === deck?.userId
  const isNotEmptyCard = deck && deck.cardsCount > 0
  const loadingStatus = isLoading || isFetching

  const onQuestionChange = (value: string) => {
    setQuestion(value)
    setCurrentPage(1)
    // setSearchParams({ page: '1', pageSize, question: value })
  }
  const onPageChange = (page: number) => {
    setCurrentPage(page)
    // setSearchParams({ page: page + '', pageSize, question })
  }
  const onPageSizeChange = (pageSize: string) => {
    setPageSize(pageSize)
    // setSearchParams({ page: '1', pageSize, question })
  }

  return (
    <>
      {loadingStatus && <LinearProgressBar />}

      <Page className={s.deckPage}>
        <GoBack className={s.goBack} text={'Back to Decks List'} to={'/decks'} />
        {deck && <DeckPageHeader deck={deck} isNotEmptyCard={!!isNotEmptyCard} isOwner={isOwner} />}
        {isNotEmptyCard && (
          <>
            <TextField
              className={s.input}
              disabled={loadingStatus}
              onChangeValue={onQuestionChange}
              placeholder={'Search by question'}
              type={'search'}
              value={question}
            />
            <CardsTable cards={deckData?.items || []} isOwner={isOwner} />
            <Pagination
              currentPage={currentPage}
              onPageChange={onPageChange}
              onValueChange={onPageSizeChange}
              options={paginationOptions}
              pageSize={Number(pageSize)}
              totalCount={deckData?.pagination.totalItems ?? 1}
              value={pageSize}
            />
          </>
        )}

        {!isNotEmptyCard && !loadingStatus && (
          <Table.Empty
            className={s.emptyText}
            text={'The deck is empty, please go back to learn other decks.'}
          />
        )}
      </Page>
    </>
  )
}
