import { useState } from 'react'

import { TrashIcon } from '@/assets/icons/trashIcon'
import { Button } from '@/common/components/ui/button'
import { Slider } from '@/common/components/ui/slider'
import { TabSwitcher } from '@/common/components/ui/tabSwitcher'
import { TextField } from '@/common/components/ui/textField'

import s from '@/feature/decks/ui/decksPanel/decksPanel.module.scss'

type PanelProps = {
  className?: string
  inputValue: string
  isDisabled?: boolean
  maxSliderValue: number
  minSliderValue: number
  onChangeInputValue: (value: string) => void
  onChangeSliderValue: (value: number[]) => void
  onChangeTabValue: (value: string) => void
  onClearFilter: () => void
  sliderLabel: string
  sliderValue: number[]
  tabLabel: string
  tabValue: string
}

export const DecksPanel = ({
  className,
  isDisabled,
  maxSliderValue,
  minSliderValue,
  onChangeSliderValue,
  // onChangeTabValue,
  onClearFilter,
  sliderLabel,
  sliderValue, // tabLabel,// tabValue,
}: PanelProps) => {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <div className={`${s.root} ${className}`}>
      <TextField
        className={s.input}
        disabled={isDisabled}
        onChange={e => setSearchValue(e.target.value)}
        placeholder={'Input search'}
        type={'search'}
        value={searchValue}
      />
      <TabSwitcher
        buttons={[
          { buttonsName: 'Switcher', isButtonsEnable: true, values: 'true' },
          { buttonsName: 'Switcher', isButtonsEnable: true, values: 'false' },
        ]}
      />
      {/*<Tabs*/}
      {/*  className={classNames.tabs}*/}
      {/*  label={tabLabel}*/}
      {/*  onValueChange={onChangeTabValue}*/}
      {/*  value={tabValue}*/}
      {/*>*/}
      {/*  <TabItem disabled={isDisabled} value={'my'}>*/}
      {/*    My Decks*/}
      {/*  </TabItem>*/}
      {/*  <TabItem disabled={isDisabled} value={'all'}>*/}
      {/*    All Decks*/}
      {/*  </TabItem>*/}
      {/*</Tabs>*/}
      <Slider
        className={s.slider}
        disabled={isDisabled}
        label={sliderLabel}
        max={maxSliderValue}
        min={minSliderValue}
        onValueChange={onChangeSliderValue}
        value={sliderValue}
      />
      <Button
        className={s.button}
        disabled={isDisabled}
        onClick={onClearFilter}
        variant={'secondary'}
      >
        <TrashIcon className={s.trashIcon} />
        Clear Filter
      </Button>
    </div>
  )
}
