/* @flow */
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { someActionCreator } from './<%= dashesEntityName %>'

import <%= pascalEntityName %> from 'components/<%= pascalEntityName %>'
const mapStateToProps = (state) => ({
  someProp: state.<%= camelEntityName %>.someProp
})
const mapActionCreators = {
  someActionCreator
}

export default connect(mapStateToProps, mapActionCreators)(<%= pascalEntityName %>)
