import { baseApi } from '@/common/api/baseApi'
import { CardsParams, CardsResponseType } from '@/feature/cards/api/cardsApi.types'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
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

export const { useGetCardsQuery } = cardsApi
