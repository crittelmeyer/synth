/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
// export const FETCH_CHARACTERS_REQUESTED = 'FETCH_CHARACTERS_REQUESTED'
// export const FETCH_CHARACTERS_SUCCEEDED = 'FETCH_CHARACTERS_SUCCEEDED'
// export const FETCH_CHARACTERS_FAILED = 'FETCH_CHARACTERS_FAILED'

// ------------------------------------
// Actions
// ------------------------------------
// export const fetchCharacters = () => ({ type: FETCH_CHARACTERS_REQUESTED })

export const actions = {
  // fetchCharacters,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  // [FETCH_CHARACTERS_SUCCEEDED]: (state, action) => ({
  //   ...state,
  //   characters: action.payload.data
  // }),
  // [FETCH_CHARACTERS_FAILED]: (state, action) => ({
  //   ...state,
  //   errorMsg: action.payload
  // })
}

// ------------------------------------
// Reducer
// ------------------------------------
type State = {

}

const initialState: State = {

}
export default function galleryReducer (state: State = initialState, action: Action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
