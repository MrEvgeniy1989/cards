import { EditIcon } from '@/assets/icons/edit'
import { PlayCircle } from '@/assets/icons/playСircle'
import { Trash } from '@/assets/icons/trash'
import { useGetDecksQuery } from '@/common/api/baseApi'
import { Table } from '@/common/components/ui/baseTable/table'
import { Button } from '@/common/components/ui/button'

import s from '@/feature/decks/ui/decksTable/decksTable.module.scss'

type Props = {}

export const DecksTable = ({}: Props) => {
  const { data, error, isLoading } = useGetDecksQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h2>Error: {JSON.stringify(error)} ...</h2>
  }

  return (
    <div className={s.decksTable}>
      <Table.Root>
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
          {data?.items?.map(deck => {
            return (
              <Table.Row className={s.tableRow} key={deck.id}>
                <Table.Cell className={s.cellName}>
                  {deck.cover && <img alt={'Deck image'} className={s.deckImg} src={deck.cover} />}
                  {deck.name}
                </Table.Cell>
                <Table.Cell>{deck.cardsCount}</Table.Cell>
                <Table.Cell>{new Date(deck.updated).toLocaleDateString('ru-RU')}</Table.Cell>
                <Table.Cell>{deck.author.name}</Table.Cell>
                <Table.Cell className={s.buttonsCell}>
                  <Button as={'a'} className={s.link}>
                    <PlayCircle />
                  </Button>
                  <Button as={'a'} className={s.link}>
                    <EditIcon />
                  </Button>
                  <Button as={'a'} className={s.link}>
                    <Trash />
                  </Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
