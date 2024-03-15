export type ColumnData = {
  className?: string
  key: string
  sortable?: boolean
  title: string
}

export const columnsData: ColumnData[] = [
  {
    key: 'name',
    sortable: true,
    title: 'Name',
  },
  {
    key: 'cardsCount',
    sortable: true,
    title: 'Cards',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'created',
    sortable: true,
    title: 'Created by',
  },
  {
    className: 'headCellButtons',
    key: 'icons',
    title: '',
  },
]
