import { baseApi } from '@/common/api/baseApi'
import { CardsParams, CardsResponseType } from '@/feature/cards/api/cardsApi.types'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
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
  }),
})

export const { useDeleteCardMutation, useGetCardsQuery } = cardsApi
