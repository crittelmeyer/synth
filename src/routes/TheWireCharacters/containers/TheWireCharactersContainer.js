/* @flow */
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { fetchCharacters, filterCharacters, searchCharacters } from '../modules/the-wire-characters'

import TheWireCharacters from 'components/TheWireCharacters'

const mapActionCreators = {
  fetchCharacters,
  filterCharacters,
  searchCharacters
}

const getCharacters = (state) => state.theWireCharacters.characters
const getVisibilityFilter = (state) => state.theWireCharacters.visibilityFilter
const getKeyword = (state) => state.theWireCharacters.keyword
const getErrorMsg = (state) => state.theWireCharacters.errorMsg

const getVisibleCharacters = createSelector(
  [getVisibilityFilter, getCharacters],
  (visibilityFilter, characters) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return characters
      case 'SHOW_SEASON_1':
        return characters.filter(c => c.seasons.indexOf(1) > -1)
      case 'SHOW_SEASON_2':
        return characters.filter(c => c.seasons.indexOf(2) > -1)
      case 'SHOW_SEASON_3':
        return characters.filter(c => c.seasons.indexOf(3) > -1)
      case 'SHOW_SEASON_4':
        return characters.filter(c => c.seasons.indexOf(4) > -1)
      case 'SHOW_SEASON_5':
        return characters.filter(c => c.seasons.indexOf(5) > -1)
      default:
        return characters
    }
  }
)
const getVisibleCharactersFilteredByKeyword = createSelector(
  [getVisibleCharacters, getKeyword],
  (visibleCharacters, keyword) => visibleCharacters.filter(
    character => keyword === '' || character.firstName.toLowerCase().indexOf(keyword.toLowerCase()) > -1
  )
)


const mapStateToProps = (state) => ({
  characters: getCharacters(state),
  visibilityFilter: getVisibilityFilter(state),
  visibleCharacters: getVisibleCharacters(state),
  visibleCharactersFiltered: getVisibleCharactersFilteredByKeyword(state),
  keyword: getKeyword(state),
  errorMsg: getErrorMsg(state)
})

export default connect(mapStateToProps, mapActionCreators)(TheWireCharacters)
