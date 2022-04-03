import * as actions from './actions'

export const selectFeature = feature => {
  return { type: actions.SELECT_FEATURE, data: feature }
}
