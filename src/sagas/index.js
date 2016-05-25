/* @flow */
import axios from 'axios'
import { takeEvery } from 'redux-saga'
import { fork, call, put, take } from 'redux-saga/effects'

import {
  FETCH_CHARACTERS_REQUESTED,
  FETCH_CHARACTERS_SUCCEEDED,
  FETCH_CHARACTERS_FAILED
} from 'routes/TheWireCharacters/modules/the-wire-characters'

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

export function * rootSaga (): Generator {
  yield [
    fork(watchFetchCharacters)
  ]
}
