import { Rating } from '@/common/components/ui/rating'
import { Table } from '@/common/components/ui/table'
import { TableHeader } from '@/common/components/ui/table/tableHeader/TableHeader'
import { Card, Sort } from '@/feature/cards/api/cardsApi.types'
import { columnsData } from '@/feature/cards/ui/columnsData'
import { DeleteCard } from '@/feature/cards/ui/deleteCard/DeleteCard'
import { EditCard } from '@/feature/cards/ui/editCard/EditCard'

import s from './CardsTable.module.scss'

type Props = {
  cards: Card[]
  isOwner: boolean
  onSort: (sort: Sort) => void
  sort: Sort
}
export const CardsTable = ({ cards, isOwner, onSort, sort }: Props) => {
  return (
    <>
      {!!cards?.length && (
        <Table.Root className={s.cardsTable}>
          <TableHeader columns={columnsData} onSort={onSort} sort={sort} />
          <Table.Body>
            {cards?.map(card => {
              return (
                <Table.Row className={s.tableRow} key={card.id}>
                  <Table.Cell className={s.cellQuestion}>
                    {card.questionImg && (
                      <img alt={'Card image'} className={s.cardImg} src={card.questionImg} />
                    )}
                    {card.question}
                  </Table.Cell>
                  <Table.Cell className={s.cellAnswer}>
                    {card.answerImg && (
                      <img alt={'Card image'} className={s.cardImg} src={card.answerImg} />
                    )}
                    {card.answer}
                  </Table.Cell>
                  <Table.Cell className={s.cellUpdated}>
                    {new Date(card.updated).toLocaleDateString('ru-RU')}
                  </Table.Cell>
                  <Table.Cell>
                    <Rating rating={card.grade} />
                  </Table.Cell>
                  {isOwner && (
                    <Table.Cell className={s.buttonsCell}>
                      <EditCard card={card} className={s.btn} />
                      <DeleteCard cardId={card.id} className={s.btn} deckId={card.deckId} />
                    </Table.Cell>
                  )}
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table.Root>
      )}
    </>
  )
}
