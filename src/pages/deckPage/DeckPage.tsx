import { useParams, useSearchParams } from 'react-router-dom'

import { GoBack } from '@/common/components/ui/goBack'
import { LinearProgressBar } from '@/common/components/ui/linearProgressBar'
import { Page } from '@/common/components/ui/page'
import { Pagination } from '@/common/components/ui/pagination'
import { Table } from '@/common/components/ui/table'
import { TextField } from '@/common/components/ui/textField'
import { useDebounce } from '@/common/hooks/useDebounce'
import { formatSortedString } from '@/common/utils/formatSortedString/formatSortedString'
import { useMeQuery } from '@/feature/auth/api/authApi'
import { useGetCardsQuery } from '@/feature/cards/api/cardsApi'
import { Sort } from '@/feature/cards/api/cardsApi.types'
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
  const [searchParams, setSearchParams] = useSearchParams()
  const question = searchParams.get('question') || ''
  const currentPage = Number(searchParams.get('page')) || 1
  const pageSize = searchParams.get('pageSize') || '10'
  const orderBy = JSON.parse(searchParams.get('orderBy') as string) ?? undefined

  const { id = '' } = useParams<{ id: string }>()
  const queryParams = {
    id,
    params: {
      currentPage,
      itemsPerPage: Number(pageSize),
      orderBy: formatSortedString(orderBy),
      question: useDebounce(question, 500),
    },
  }

  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckByIdQuery({ id })
  const { data: deckData, isFetching, isLoading } = useGetCardsQuery(queryParams)

  const isOwner = user?.id === deck?.userId
  const isNotEmptyCard = deck && deck.cardsCount > 0
  const loadingStatus = isLoading || isFetching

  const onQuestionChange = (value: string) => {
    searchParams.set('question', value)
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }
  const onPageChange = (page: number) => {
    searchParams.set('page', page + '')
    setSearchParams(searchParams)
  }
  const onPageSizeChange = (pageSize: string) => {
    searchParams.set('pageSize', pageSize)
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }

  const onSortChange = (orderBy: Sort) => {
    searchParams.set('orderBy', JSON.stringify(orderBy))
    searchParams.set('page', '1')
    setSearchParams(searchParams)
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
            <CardsTable
              cards={deckData?.items || []}
              isOwner={isOwner}
              onSort={onSortChange}
              sort={orderBy}
            />
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
