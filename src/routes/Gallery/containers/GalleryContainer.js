/* @flow */
import { connect } from 'react-redux'
// import { createSelector } from 'reselect'
// import { fetchCharacters, filterCharacters, searchCharacters } from '../modules/the-wire-characters'

import Gallery from 'components/Gallery'

const mapActionCreators = {
  // fetchCharacters,
  // filterCharacters,
  // searchCharacters
}

// const getCharacters = (state) => state.theWireCharacters.characters
// const getVisibilityFilter = (state) => state.theWireCharacters.visibilityFilter
// const getKeyword = (state) => state.theWireCharacters.keyword
// const getErrorMsg = (state) => state.theWireCharacters.errorMsg

const mapStateToProps = (state) => ({
  // characters: getCharacters(state),
  // visibilityFilter: getVisibilityFilter(state),
  // visibleCharacters: getVisibleCharacters(state),
  // visibleCharactersFiltered: getVisibleCharactersFilteredByKeyword(state),
  // keyword: getKeyword(state),
  // errorMsg: getErrorMsg(state)
})

export default connect(mapStateToProps, mapActionCreators)(Gallery)
