import { baseApi } from '@/common/api/baseApi'
import { Deck } from '@/feature/decks/api/decksApi.types'

import { CardRate, CardWithGrade } from './learn.types'

export const learnApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDeckInfo: builder.query<Deck, { id: string }>({
      query: ({ id }) => ({
        url: `v1/decks/${id}`,
      }),
    }),
    getLearnCard: builder.query<CardWithGrade, { id: string }>({
      query: ({ id }) => ({
        url: `v1/decks/${id}/learn`,
      }),
    }),
    postRateCard: builder.mutation<CardWithGrade, CardRate>({
      async onQueryStarted({ packId }, { dispatch, queryFulfilled }) {
        try {
          const { data: newCard } = await queryFulfilled

          dispatch(
            learnApi.util.updateQueryData('getLearnCard', { id: packId }, () => {
              return newCard
            })
          )
        } catch (error) {
          console.log(error)
        }
      },
      query: ({ packId, ...rest }) => ({
        body: rest,
        method: 'POST',
        url: `v1/decks/${packId}/learn`,
      }),
    }),
  }),
})
export const { useGetDeckInfoQuery, useGetLearnCardQuery, usePostRateCardMutation } = learnApi
