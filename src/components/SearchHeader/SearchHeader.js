/* @flow */
import React from 'react'
import { globalStyles } from 'styles/js/global_styles'

import { grey400 } from 'material-ui/styles/colors'

import { Paper, TextField } from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search'

type Props = {
  height: number
}

const styles = {
  container: (height) => ({
    ...globalStyles.flexContainer,
    padding: globalStyles.STANDARD_SPACING,
    height
  }),
  icon: (height) => ({
    height: globalStyles.ICON_SIZE,
    width: globalStyles.ICON_SIZE,
    marginTop: (height - globalStyles.DBL_STANDARD_SPACING) - globalStyles.ICON_SIZE
  }),
  textField: (height) => ({
    fontSize: globalStyles.BIG_FONT_SIZE,
    height: (height - globalStyles.DBL_STANDARD_SPACING)
  })
}

export const SearchHeader = (props: Props) => (
  <Paper zDepth={2} rounded={false} style={styles.container(props.height)}>
    <SearchIcon style={styles.icon(props.height)} color={grey400} />
    <div style={globalStyles.flexFullWidth}>
      <TextField
        hintText="I'm looking for..."
        fullWidth
        style={styles.textField(props.height)}
      />
    </div>
  </Paper>
)

SearchHeader.propTypes = {
  height: React.PropTypes.number.isRequired
}

export default SearchHeader
