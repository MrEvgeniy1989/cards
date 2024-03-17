export type ColumnData = {
  className?: string
  key: string
  sortable?: boolean
  title: string
}

export const columnsData: ColumnData[] = [
  {
    key: 'question',
    sortable: true,
    title: 'Question',
  },
  {
    key: 'answer',
    sortable: true,
    title: 'Answer',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'grade',
    sortable: true,
    title: 'Grade',
  },
  {
    className: 'headCellButtons',
    key: 'icons',
    title: '',
  },
]
