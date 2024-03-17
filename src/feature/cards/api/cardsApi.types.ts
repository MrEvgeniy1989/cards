export type CardsResponseType = {
  items: Card[]
  pagination: CardsPagination
}
export type Card = {
  answer: string
  answerImg: null | string
  answerVideo: string
  created: string
  deckId: string
  grade: 0 | 1 | 2 | 3 | 4 | 5
  id: string
  question: string
  questionImg: null | string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}
type CardsPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type CardsParams = {
  answer?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: string
  question?: string
}
export type CardResponse = Omit<Card, 'userId'>
export type RandomCardRequest = {
  id: string
  previousCardId?: string
}
export type CardRateRequest = {
  cardId: string
  deckId: string
  grade: number
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
