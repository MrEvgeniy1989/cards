import { baseApi } from '@/common/api/baseApi'
import {
  Deck,
  DeckWithAuthor,
  GetDecksParamsType,
  MinMaxCardsResponse,
  UpdateDeckParamsType,
  getDecksResponse,
} from '@/feature/decks/api/decksApi.types'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createDeck: builder.mutation<DeckWithAuthor, FormData>({
      invalidatesTags: ['Decks'],
      query: body => ({
        body,
        method: 'POST',
        url: 'v1/decks',
      }),
    }),
    deleteDeck: builder.mutation<Deck, { id: string }>({
      invalidatesTags: ['Decks'],
      query: ({ id }) => ({
        method: 'DELETE',
        url: `v1/decks/${id}`,
      }),
    }),
    getDeckById: builder.query<DeckWithAuthor, { id: string }>({
      providesTags: ['Decks', { id: 'List', type: 'Decks' }],
      query: ({ id }) => ({
        method: 'GET',
        url: `v1/decks/${id}`,
      }),
    }),
    getDecks: builder.query<getDecksResponse, GetDecksParamsType | void>({
      providesTags: ['Decks'],
      query: params => ({
        method: 'GET',
        params: params ?? {},
        url: 'v2/decks',
      }),
    }),
    getMinMaxCards: builder.query<MinMaxCardsResponse, void>({
      query: () => ({
        method: 'GET',
        url: 'v2/decks/min-max-cards',
      }),
    }),
    updateDeck: builder.mutation<DeckWithAuthor, UpdateDeckParamsType>({
      invalidatesTags: ['Decks'],
      query: ({ body, deckId }) => ({
        body,
        method: 'PATCH',
        url: `v1/decks/${deckId}`,
      }),
    }),
  }),
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
  useUpdateDeckMutation,
} = decksApi
