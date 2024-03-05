import { Sort } from '@/feature/decks/api/decksApi.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type CardsCountType = {
  max: number | undefined
  min: number
}

type PageOptionType = {
  title: string
  value: string
}

const initialState = {
  authorId: undefined as string | undefined,
  cardsCount: {
    max: undefined,
    min: 0,
  } as CardsCountType,
  currentPage: 1,
  pageOptions: [
    { title: '5', value: '5' },
    { title: '10', value: '10' },
    { title: '15', value: '15' },
  ] as PageOptionType[],
  pageSize: 10,
  searchName: '',
  sortOptions: undefined as Sort | undefined,
  tabValue: 'all',
}

export const decksSlice = createSlice({
  initialState,
  name: 'decks',
  reducers: {
    clearFilters: state => {
      state.searchName = ''
      state.tabValue = 'all'
      state.authorId = undefined
      state.sortOptions = null
    },
    resetCurrentPage: state => {
      state.currentPage = 1
    },
    setAuthorId: (state, action: PayloadAction<{ authorId: string | undefined }>) => {
      state.authorId = action.payload.authorId
    },
    setCardsCount: (state, action: PayloadAction<{ cardsCount: CardsCountType }>) => {
      state.cardsCount = action.payload.cardsCount
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
    setSearchByName: (state, action: PayloadAction<{ searchName: string }>) => {
      state.searchName = action.payload.searchName
    },
    setSortOptions: (state, action: PayloadAction<{ sortOptions: Sort | undefined }>) => {
      state.sortOptions = action.payload.sortOptions
    },
    setTabValue: (state, action: PayloadAction<{ tabValue: string }>) => {
      state.tabValue = action.payload.tabValue
    },
  },
})

export const decksActions = decksSlice.actions
