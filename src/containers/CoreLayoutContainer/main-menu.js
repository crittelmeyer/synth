// ------------------------------------
// Constants
// ------------------------------------
export const TOGGLE_MENU = 'TOGGLE_MENU'
export const CLOSE_MENU = 'CLOSE_MENU'
export const SELECT_SUB_MENU_ITEM = 'SELECT_SUB_MENU_ITEM'
export const REDIRECT_EXTERNAL = 'REDIRECT_EXTERNAL'
export const SELECTED_SUB_MENU_ITEM = 'SELECTED_SUB_MENU_ITEM'

// ------------------------------------
// Actions
// ------------------------------------
export const toggleMenu = (item) => ({ type: TOGGLE_MENU, payload: item })
export const closeMenu = () => ({ type: CLOSE_MENU })
export const selectSubMenuItem = (item) => ({ type: SELECT_SUB_MENU_ITEM, payload: item.href })

export const actions = {
  toggleMenu,
  closeMenu,
  selectSubMenuItem
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TOGGLE_MENU]: (state, action) => {
    if (action.payload.subMenuItems && action.payload.subMenuItems.length > 0) {
      return ({
        ...state,
        menuOpen: state.menuOpen !== action.payload.id ? action.payload.id : false
      })
    } else {
      return state
    }
  },
  [CLOSE_MENU]: (state, action) => ({
    ...state,
    menuOpen: false
  }),
  [REDIRECT_EXTERNAL]: (state, action) => {
    window.location.href = action.payload
    return state
  },
  [SELECTED_SUB_MENU_ITEM]: (state, action) => (state)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { menuOpen: false }
export default function mainMenuReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
