export type DecksAuthor = {
  id: string
  name: string
}
export type Deck = {
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type DeckWithAuthor = Deck & { author: DecksAuthor }
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type getDecksResponse = {
  items: DeckWithAuthor[]
  pagination: Pagination
}

export type GetDecksParamsType = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type MinMaxCardsResponse = {
  max: number
  min: number
}
export type UpdateDeckParamsType = {
  body: FormData
  deckId: string
}
export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
