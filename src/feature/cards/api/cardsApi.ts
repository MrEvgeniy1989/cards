import { baseApi } from '@/common/api/baseApi'
import { Card, CardsParams, CardsResponseType } from '@/feature/cards/api/cardsApi.types'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createCard: builder.mutation<Card, { body: FormData; deckId: string }>({
      invalidatesTags: ['Cards'],
      query: ({ body, deckId }) => ({
        body,
        method: 'POST',
        url: `/v1/decks/${deckId}/cards`,
      }),
    }),
    deleteCard: builder.mutation<void, { cardId: string; deckId: string }>({
      invalidatesTags: ['Cards'],
      query: ({ cardId }) => ({
        method: 'DELETE',
        url: `/v1/cards/${cardId}`,
      }),
    }),
    getCards: builder.query<CardsResponseType, { id: string; params: CardsParams }>({
      providesTags: ['Cards'],
      query: ({ id, params }) => ({
        method: 'GET',
        params: params,
        url: `/v1/decks/${id}/cards`,
      }),
    }),
    updateCard: builder.mutation<Card, { body: FormData; cardId: string; deckId: string }>({
      invalidatesTags: ['Cards'],
      query: ({ body, cardId }) => ({
        body,
        method: 'PATCH',
        url: `/v1/cards/${cardId}`,
      }),
    }),
  }),
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useUpdateCardMutation,
} = cardsApi
