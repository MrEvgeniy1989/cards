export type DecksAuthor = {
  id: string
  name: string
}
export type Deck = {
  author: DecksAuthor
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type DeckResponse = {
  items: Deck[]
  pagination: Pagination
}
