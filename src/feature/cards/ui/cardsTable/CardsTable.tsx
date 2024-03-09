import { EditIcon } from '@/assets/icons/edit'
import { Trash } from '@/assets/icons/trash'
import { Button } from '@/common/components/ui/button'
import { Rating } from '@/common/components/ui/rating'
import { Table } from '@/common/components/ui/table'
import { Card } from '@/feature/cards/api/cardsApi.types'

import s from './CardsTable.module.scss'

type Props = {
  cards: Card[]
  isOwner: boolean
}
export const CardsTable = ({ cards, isOwner }: Props) => {
  return (
    <>
      {!!cards?.length && (
        <Table.Root className={s.cardsTable}>
          <Table.Head>
            <Table.Row>
              <Table.HeadCell>Question</Table.HeadCell>
              <Table.HeadCell>Answer</Table.HeadCell>
              <Table.HeadCell>Last Updated</Table.HeadCell>
              <Table.HeadCell>Grade</Table.HeadCell>
              {isOwner && <Table.HeadCell></Table.HeadCell>}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {cards?.map(card => {
              return (
                <Table.Row className={s.tableRow} key={card.id}>
                  <Table.Cell className={s.cellQuestion}>
                    <div className={s.flexWrapper}>
                      {card.questionImg && (
                        <img alt={'Card image'} className={s.cardImg} src={card.questionImg} />
                      )}
                      {card.question}
                    </div>
                  </Table.Cell>
                  <Table.Cell className={s.cellAnswer}>
                    <div className={s.flexWrapper}>
                      {card.answerImg && (
                        <img alt={'Card image'} className={s.cardImg} src={card.answerImg} />
                      )}
                      {card.answer}
                    </div>
                  </Table.Cell>
                  <Table.Cell className={s.cellUpdated}>
                    {new Date(card.updated).toLocaleDateString('ru-RU')}
                  </Table.Cell>
                  <Table.Cell>
                    <Rating rating={card.grade} />
                  </Table.Cell>
                  {isOwner && (
                    <Table.Cell className={s.buttonsCell}>
                      <Button className={s.link}>
                        <EditIcon />
                      </Button>
                      <Button className={s.link}>
                        <Trash />
                      </Button>
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
