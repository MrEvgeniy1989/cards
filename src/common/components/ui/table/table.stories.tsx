import type { Meta, StoryObj } from '@storybook/react'

import { ArrowUp } from '@/assets/icons/arrowUp'
import { EditIcon } from '@/assets/icons/edit'
import { EmptyStar } from '@/assets/icons/emptyStar'
import { PlayCircle } from '@/assets/icons/playСircle'
import { Star } from '@/assets/icons/star'
import { Trash } from '@/assets/icons/trash'
import deckImg from '@/assets/images/defaultImg.png'
import { Button } from '@/common/components/ui/button'
import { Table } from '@/common/components/ui/table/table'

import s from '@/common/components/ui/table/tableStories.module.scss'

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
  tags: ['auto docs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

function BaseTable() {
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
          <Table.Row>
            <Table.Cell>
              <div className={s.cellWrapper}>
                <img alt={'Deck image'} className={s.deckImg} src={deckImg} />
                <label>Name</label>
              </div>
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
          <Table.Row>
            <Table.Cell className={s.displayFlex + ' ' + s.height60}>Row 2 Cell 1</Table.Cell>
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

export const Default: Story = {
  args: {},
  render: () => <BaseTable />,
}
export const EmptyTable: Story = {
  render: () => (
    <Table.Empty text={'Your Decks list is empty. Click Add New Deck to fill this deck.'} />
  ),
}
