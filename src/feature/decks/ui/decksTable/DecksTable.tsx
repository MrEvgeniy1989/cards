import { Link } from 'react-router-dom'

import { EditIcon } from '@/assets/icons/edit'
import { PlayCircle } from '@/assets/icons/playСircle'
import { Trash } from '@/assets/icons/trash'
import { Button } from '@/common/components/ui/button'
import { Table } from '@/common/components/ui/table'
import { Sort, getDecksResponse } from '@/feature/decks/api/decksApi.types'

import s from '@/feature/decks/ui/decksTable/decksTable.module.scss'

type Props = {
  decksData: getDecksResponse
  isDisabled: boolean
  onSort: (sort: Sort) => void
  sort: Sort | undefined
}

export const DecksTable = ({ decksData }: Props) => {
  return (
    <>
      {!!decksData?.items.length && (
        <Table.Root className={s.decksTable}>
          <Table.Head>
            <Table.Row>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Cards</Table.HeadCell>
              <Table.HeadCell>Last Updated</Table.HeadCell>
              <Table.HeadCell>Created by</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {decksData?.items?.map(deck => {
              return (
                <Table.Row className={s.tableRow} key={deck.id}>
                  <Table.Cell className={s.cellName}>
                    {deck.cover && (
                      <img alt={'Deck image'} className={s.deckImg} src={deck.cover} />
                    )}
                    {deck.name}
                  </Table.Cell>
                  <Table.Cell>{deck.cardsCount}</Table.Cell>
                  <Table.Cell>{new Date(deck.updated).toLocaleDateString('ru-RU')}</Table.Cell>
                  <Table.Cell>{deck.author.name}</Table.Cell>
                  <Table.Cell className={s.buttonsCell}>
                    <Button as={Link} className={s.link} to={`/decks/${deck.id}/learn`}>
                      <PlayCircle />
                    </Button>
                    <Button as={Link} className={s.link} to={'/'}>
                      <EditIcon />
                    </Button>
                    <Button as={Link} className={s.link} to={'/'}>
                      <Trash />
                    </Button>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table.Root>
      )}
      {!decksData?.items.length && (
        <Table.Empty text={'Your Decks list is empty. Click Add New Deck to fill this deck.'} />
      )}
    </>
  )
}
