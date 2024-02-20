import { ArrowUp } from '@/assets/icons/arrowUp'
import { EditIcon } from '@/assets/icons/edit'
import { EmptyStar } from '@/assets/icons/emptyStar'
import { PlayCircle } from '@/assets/icons/playСircle'
import { Star } from '@/assets/icons/star'
import { Trash } from '@/assets/icons/trash'
import deckImg from '@/assets/images/defaultImg.png'
import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/deksTabel/table'

import s from '@/components/ui/deksTabel/baseTable.module.scss'

export function BaseTable() {
  return (
    <div>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>

            <Table.HeadCell className={s.headCards}>
              Cards
              <ArrowUp className={s.arrowUp} />
            </Table.HeadCell>
            <Table.HeadCell>Last Updated</Table.HeadCell>
            <Table.HeadCell>Created by</Table.HeadCell>
            <Table.HeadCell>Settings</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row className={s.height60}>
            <Table.Cell className={s.displayFlex + ' ' + s.height60}>
              <img alt={'Deck image'} className={s.deckImg} src={deckImg} />
              <label className={s.displayFlex}>Name</label>
            </Table.Cell>
            <Table.Cell>Row 1 Cell 2</Table.Cell>
            <Table.Cell>Row 1 Cell 3</Table.Cell>
            <Table.Cell key={4}>
              <Star />
              <Star />
              <Star />
              <Star />
              <EmptyStar />
            </Table.Cell>
            <Table.Cell key={5}>
              <Button as={'a'} className={s.link}>
                <PlayCircle />
              </Button>{' '}
              <Button as={'a'} className={s.link}>
                <EditIcon />
              </Button>{' '}
              <Button as={'a'} className={s.link}>
                <Trash />
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className={s.height60}>
            <Table.Cell>Row 2 Cell 1</Table.Cell>
            <Table.Cell>Row 2 Cell 2</Table.Cell>
            <Table.Cell>Row 2 Cell 3</Table.Cell>
            <Table.Cell>
              <Star />
              <Star />
              <Star />
              <Star />
              <EmptyStar />
            </Table.Cell>
            <Table.Cell key={5}>
              <Button as={'a'} className={s.link}>
                <PlayCircle />
              </Button>{' '}
              <Button as={'a'} className={s.link}>
                <EditIcon />
              </Button>{' '}
              <Button as={'a'} className={s.link}>
                <Trash />
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  )
}
