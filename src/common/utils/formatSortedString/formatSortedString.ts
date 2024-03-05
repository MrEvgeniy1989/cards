import { Sort } from '@/feature/decks/api/decksApi.types'

export const formatSortedString = (sortOptions: Sort | undefined) => {
  if (sortOptions) {
    return `${sortOptions.key}-${sortOptions.direction}`
  }
}
