import * as actions from './actions'
export const ui = (state = {}, { type, data }) => {
  switch (type) {
    case actions.SELECT_FEATURE:
      return { ...state, feature: data }
    default:
      return state
  }
}
