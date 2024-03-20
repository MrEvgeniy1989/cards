import { Link } from 'react-router-dom'

import { EditIcon } from '@/assets/icons/edit'
import { PlayCircle } from '@/assets/icons/playСircle'
import { Trash } from '@/assets/icons/trash'
import { Button } from '@/common/components/ui/button'
import { Table } from '@/common/components/ui/table'
import { TableHeader } from '@/common/components/ui/table/tableHeader/TableHeader'
import { Typography } from '@/common/components/ui/typography'
import { useMeQuery } from '@/feature/auth/api/authApi'
import { useDeleteDeckMutation } from '@/feature/decks/api/decksApi'
import { Sort, getDecksResponse } from '@/feature/decks/api/decksApi.types'
import { columnsData } from '@/feature/decks/ui/columnsData'

import s from '@/feature/decks/ui/decksTable/decksTable.module.scss'

type Props = {
  decksData: getDecksResponse
  isDisabled: boolean
  onSort: (sort: Sort) => void
  sort: Sort | undefined
}

export const DecksTable = ({ decksData, isDisabled, onSort, sort }: Props) => {
  const { data: user } = useMeQuery()
  const [deleteDeck] = useDeleteDeckMutation()

  return (
    <>
      <Table.Root className={s.decksTable}>
        <TableHeader columns={columnsData} onSort={onSort} sort={sort} />
        <Table.Body>
          {decksData?.items?.map(deck => {
            const onDeleteDeck = () => deleteDeck({ id: deck.id })

            return (
              <Table.Row aria-disabled={isDisabled} className={s.tableRow} key={deck.id}>
                <Table.Cell className={s.cellName}>
                  <Link to={`/decks/${deck.id}/cards`}>
                    <div className={s.cellNameWithImage}>
                      {deck.cover && (
                        <img alt={'deck cover'} className={s.deckImg} src={deck.cover} />
                      )}
                      <Typography variant={'body2'}>{deck.name}</Typography>
                    </div>
                  </Link>
                </Table.Cell>

                <Table.Cell>{deck.cardsCount}</Table.Cell>

                <Table.Cell>
                  {new Date(deck.updated).toLocaleString('ru-RU', {
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    month: '2-digit',
                    second: '2-digit',
                    year: 'numeric',
                  })}
                </Table.Cell>

                <Table.Cell>{deck.author.name}</Table.Cell>

                <Table.Cell className={s.buttonsCell}>
                  {deck.cardsCount < 1 ? (
                    <span className={s.disabledLink} title={'This deck is empty.'}>
                      <PlayCircle />
                    </span>
                  ) : (
                    <Button
                      aria-disabled={isDisabled}
                      as={Link}
                      className={s.startLerningLink}
                      title={'Start learning'}
                      to={`/decks/${deck.id}/learn`}
                    >
                      <PlayCircle />
                    </Button>
                  )}

                  <Button
                    className={s.iconButton}
                    disabled={isDisabled || user?.id !== deck.author.id}
                    title={
                      user?.id !== deck.author.id
                        ? "You can't edit someone else's deck"
                        : 'Edit deck'
                    }
                  >
                    <EditIcon />
                  </Button>

                  <Button
                    className={s.iconButton}
                    disabled={isDisabled || user?.id !== deck.author.id}
                    onClick={onDeleteDeck}
                    title={
                      user?.id !== deck.author.id
                        ? "You can't delete someone else's deck"
                        : 'Delete deck'
                    }
                  >
                    <Trash />
                  </Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </>
  )
}
