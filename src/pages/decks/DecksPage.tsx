import { Page } from '@/common/components/ui/page'
import { Pagination } from '@/common/components/ui/pagination'
import { DecksHeader } from '@/feature/decks/ui/decksHeader/DecksHeader'
import { DecksPanel } from '@/feature/decks/ui/decksPanel/DecksPanel'
import { DecksTable } from '@/feature/decks/ui/decksTable/DecksTable'

import s from '@/pages/decks/decksPage.module.scss'

type Props = {}

export const DecksPage = ({}: Props) => {
  return (
    <Page className={s.decksPage}>
      <DecksHeader isDisabled={false} />
      <DecksPanel
        inputValue={''}
        maxSliderValue={100}
        minSliderValue={0}
        onChangeInputValue={() => {}}
        onChangeSliderValue={() => {}}
        onChangeTabValue={() => {}}
        onClearFilter={() => {}}
        sliderLabel={'Number of cards'}
        sliderValue={[25, 75]}
        tabLabel={''}
        tabValue={'1'}
      />
      <DecksTable />
      <Pagination
        currentPage={1}
        onPageChange={() => {}}
        options={[
          { title: '10', value: '10' },
          { title: '5', value: '5' },
        ]}
        pageSize={10}
        totalCount={100}
      />
    </Page>
  )
}
