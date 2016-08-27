/* @flow */
import { connect } from 'react-redux'
import { fetchBoard } from '../modules/home'

import Home from 'components/Home'

const mapActionCreators = {
  fetchBoard
}

const getBoard = (state) => state.home.board
const getErrorMsg = (state) => state.home.errorMsg

const mapStateToProps = (state) => ({
  board: getBoard(state),
  errorMsg: getErrorMsg(state)
})

export default connect(mapStateToProps, mapActionCreators)(Home)
