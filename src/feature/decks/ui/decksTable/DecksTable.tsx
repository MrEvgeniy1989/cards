import { Link } from 'react-router-dom'

import { Table } from '@/common/components/ui/table'
import { TableHeader } from '@/common/components/ui/table/tableHeader/TableHeader'
import { Typography } from '@/common/components/ui/typography'
import { useMeQuery } from '@/feature/auth/api/authApi'
import { Sort, getDecksResponse } from '@/feature/decks/api/decksApi.types'
import { columnsData } from '@/feature/decks/ui/columnsData'
import { DecksTableButtons } from '@/feature/decks/ui/decksTable/decksTableButtons/DecksTableButtons'

import s from '@/feature/decks/ui/decksTable/decksTable.module.scss'

type Props = {
  decksData: getDecksResponse
  isDisabled: boolean
  onSort: (sort: Sort) => void
  sort: Sort | undefined
}

export const DecksTable = ({ decksData, isDisabled, onSort, sort }: Props) => {
  const { data: user } = useMeQuery()

  return (
    <>
      <Table.Root className={s.decksTable}>
        <TableHeader columns={columnsData} onSort={onSort} sort={sort} />
        <Table.Body>
          {decksData?.items?.map(deck => {
            return (
              <Table.Row aria-disabled={isDisabled} className={s.tableRow} key={deck.id}>
                <Table.Cell className={s.cellName}>
                  <label className={s.cellForMobile}>Name</label>
                  <Link to={`/decks/${deck.id}/cards`}>
                    <div className={s.cellNameWithImage}>
                      {deck.cover && (
                        <img alt={'deck cover'} className={s.deckImg} src={deck.cover} />
                      )}
                      <Typography variant={'body2'}>{deck.name}</Typography>
                    </div>
                  </Link>
                </Table.Cell>

                <Table.Cell>
                  <label className={s.cellForMobile}>Cards</label>
                  {deck.cardsCount}
                </Table.Cell>

                <Table.Cell>
                  <label className={s.cellForMobile}>Last Updated</label>
                  {new Date(deck.updated).toLocaleString('ru-RU', {
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    month: '2-digit',
                    second: '2-digit',
                    year: 'numeric',
                  })}
                </Table.Cell>

                <Table.Cell>
                  <label className={s.cellForMobile}>Created by</label>
                  {deck.author.name}
                </Table.Cell>

                <Table.Cell className={s.buttonsCell}>
                  <DecksTableButtons
                    deck={deck}
                    isDisabled={isDisabled}
                    isMyDeck={user?.id === deck.author.id}
                  />
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </>
  )
}
