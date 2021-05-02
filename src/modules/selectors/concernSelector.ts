/* External dependencies */
import { createSelector } from 'reselect'

/* Internal dependencies */
import { RootState } from 'modules/reducers'

export const getConcernList = (state: RootState) =>
  state.concern.concernList.toList()

export const getConcernDetail = (state: RootState) =>
  state.concern.concernDetail

export const getPrevNextConcern = createSelector(
  getConcernList,
  getConcernDetail,
  (concernList, concernDetail) => {
    const currentIndex = concernList.findIndex(
      concern => concern.id === concernDetail.id,
    )

    if (currentIndex === -1) {
      return {}
    }

    return {
      prevConcernIndex: currentIndex - 1,
      nextConcernIndex: currentIndex + 1,
    }
  },
)
