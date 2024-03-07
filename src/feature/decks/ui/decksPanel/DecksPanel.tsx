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
  inputValue,
  isDisabled = false,
  maxSliderValue,
  minSliderValue,
  onChangeInputValue,
  onChangeSliderValue,
  onChangeTabValue,
  onClearFilter,
  sliderLabel,
  sliderValue,
  tabLabel,
  tabValue,
}: PanelProps) => {
  return (
    <div className={`${s.root} ${className}`}>
      <TextField
        className={s.input}
        disabled={isDisabled}
        onChangeValue={onChangeInputValue}
        placeholder={'Input search'}
        type={'search'}
        value={inputValue}
      />
      <TabSwitcher
        buttons={[
          { buttonsName: 'My Cards', disabled: isDisabled, value: 'my' },
          { buttonsName: 'All Cards', disabled: isDisabled, value: 'all' },
        ]}
        className={s.tabs}
        label={tabLabel}
        onValueChange={onChangeTabValue}
        value={tabValue}
      />
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
