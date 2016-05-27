/* eslint-disable no-constant-condition */
/* @flow */
import axios from 'axios'
import { takeEvery } from 'redux-saga'
import { fork, call, put, take } from 'redux-saga/effects'

import {
  FETCH_CHARACTERS_REQUESTED,
  FETCH_CHARACTERS_SUCCEEDED,
  FETCH_CHARACTERS_FAILED
} from 'routes/TheWireCharacters/modules/the-wire-characters'

import {
  TOGGLE_MENU,
  CLOSE_MENU,
  SELECT_SUB_MENU_ITEM,
  REDIRECT_EXTERNAL,
  SELECTED_SUB_MENU_ITEM
} from 'containers/CoreLayoutContainer/main-menu'

function * fetchCharacters () {
  try {
    const url = 'http://localhost:2403/the-wire-characters'
    const characters = yield call(axios.get, url)
    yield put({type: FETCH_CHARACTERS_SUCCEEDED, payload: characters})
  } catch (e) {
    yield put({type: FETCH_CHARACTERS_FAILED, payload: e.message})
  }
}

function * watchFetchCharacters () {
  while (true) {
    yield * takeEvery(FETCH_CHARACTERS_REQUESTED, fetchCharacters)
  }
}

function * toggleMenu (action) {
  if (!action.payload.subMenuItems || action.payload.subMenuItems.length === 0) {
    yield put({ type: SELECT_SUB_MENU_ITEM, payload: action.payload.href })
  }
}

function * watchToggleMenu () {
  while (true) {
    const action = yield take(TOGGLE_MENU)
    yield fork(toggleMenu, action)
  }
}

function * selectSubMenuItem (action) {
  if (action.payload) {
    // hacky way to support external URLs for client-side web only
    if (action.payload.indexOf('http://') > -1) {
      yield put({ type: REDIRECT_EXTERNAL, payload: action.payload })
    } else {
      yield put({
        type: SELECTED_SUB_MENU_ITEM,
        payload: action.payload,
        meta: {
          transition: (prevState, nextState, action) => ({
            pathname: action.payload
          })
        }
      })
      yield put({ type: CLOSE_MENU })
    }
  }
}

function * watchSelectSubMenuItem () {
  while (true) {
    const action = yield take(SELECT_SUB_MENU_ITEM)
    yield fork(selectSubMenuItem, action)
  }
}

export function * rootSaga (): Generator {
  yield [
    fork(watchFetchCharacters),
    fork(watchToggleMenu),
    fork(watchSelectSubMenuItem)
  ]
}
