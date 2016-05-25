/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_CHARACTERS_REQUESTED = 'FETCH_CHARACTERS_REQUESTED'
export const FETCH_CHARACTERS_SUCCEEDED = 'FETCH_CHARACTERS_SUCCEEDED'
export const FETCH_CHARACTERS_FAILED = 'FETCH_CHARACTERS_FAILED'
export const FILTER_CHARACTERS = 'FILTER_CHARACTERS'
export const SEARCH_CHARACTERS = 'SEARCH_CHARACTERS'

// ------------------------------------
// Actions
// ------------------------------------
export const fetchCharacters = () => ({ type: FETCH_CHARACTERS_REQUESTED })
export const filterCharacters = (filter: string) => ({
  type: FILTER_CHARACTERS,
  payload: filter
})
export const searchCharacters = (keyword: string) => ({
  type: SEARCH_CHARACTERS,
  payload: keyword
})

export const actions = {
  fetchCharacters,
  filterCharacters,
  searchCharacters
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_CHARACTERS_SUCCEEDED]: (state, action) => ({
    ...state,
    characters: action.payload.data
  }),
  [FETCH_CHARACTERS_FAILED]: (state, action) => ({
    ...state,
    errorMsg: action.payload
  }),
  [FILTER_CHARACTERS]: (state, action) => ({
    ...state,
    visibilityFilter: action.payload
  }),
  [SEARCH_CHARACTERS]: (state, action) => ({
    ...state,
    keyword: action.payload
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
type State = {
  characters: Array<any>,
  visibleCharacters: Array<any>,
  visibleCharactersFiltered: Array<any>,
  errorMsg: ?string,
  keyword: string,
  visibilityFilter: string
}

const initialState: State = {
  characters: [],
  visibleCharacters: [],
  visibleCharactersFiltered: [],
  errorMsg: null,
  keyword: '',
  visibilityFilter: 'SHOW_ALL'
}
export default function theWireCharactersReducer (state: State = initialState, action: Action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
