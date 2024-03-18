import { Link } from 'react-router-dom'

import { EditIcon } from '@/assets/icons/edit'
import { PlayCircle } from '@/assets/icons/playСircle'
import { Trash } from '@/assets/icons/trash'
import { Button } from '@/common/components/ui/button'
import { Table } from '@/common/components/ui/table'
import { TableHeader } from '@/common/components/ui/table/tableHeader/TableHeader'
import { Typography } from '@/common/components/ui/typography'
import { useMeQuery } from '@/feature/auth/api/authApi'
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

  return (
    <>
      <Table.Root className={s.decksTable}>
        <TableHeader columns={columnsData} onSort={onSort} sort={sort} />
        <Table.Body>
          {decksData?.items?.map(deck => {
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
                  <Button
                    aria-disabled={isDisabled}
                    as={Link}
                    className={s.link}
                    title={'Start learning'}
                    to={`/decks/${deck.id}/learn`}
                  >
                    <PlayCircle />
                  </Button>
                  {user?.id !== deck.author.id ? (
                    <span className={s.disabledLink} title={"You can't edit someone else's deck"}>
                      <EditIcon />
                    </span>
                  ) : (
                    <Button
                      aria-disabled={isDisabled}
                      as={Link}
                      className={s.link}
                      title={'Edit deck'}
                      to={'/'}
                    >
                      <EditIcon />
                    </Button>
                  )}
                  {user?.id !== deck.author.id ? (
                    <span className={s.disabledLink} title={"You can't edit someone else's deck"}>
                      <Trash />
                    </span>
                  ) : (
                    <Button
                      aria-disabled={isDisabled}
                      as={Link}
                      className={s.link}
                      title={'Delete deck'}
                      to={'/'}
                    >
                      <Trash />
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </>
  )
}
