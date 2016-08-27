/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_BOARD_SUCCEEDED = 'FETCH_BOARD_SUCCEEDED'
export const FETCH_BOARD = 'server/FETCH_BOARD'

// ------------------------------------
// Actions
// ------------------------------------
export const fetchBoard = () => ({ type: FETCH_BOARD })
// export const filterCharacters = (filter: string) => ({
//   type: FILTER_CHARACTERS,
//   payload: filter
// })

export const actions = {
  fetchBoard
  // filterCharacters
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_BOARD_SUCCEEDED]: (state, action) => {
    return ({
      ...state,
      board: action.payload.board
    })
  },
  // [FILTER_CHARACTERS]: (state, action) => ({
  //   ...state,
  //   visibilityFilter: action.payload
  // })
}

// ------------------------------------
// Reducer
// ------------------------------------
type State = {
  board: Object,
  errorMsg: ?string
}

const initialState: State = {
  board: {},
  errorMsg: null
}
export default function homeReducer (state: State = initialState, action: Action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
