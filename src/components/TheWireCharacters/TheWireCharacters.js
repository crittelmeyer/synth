/* @flow */
import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
  TextField, DropDownMenu, MenuItem,
  Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'

const TOOLBAR_HEIGHT = 56

const styles = {
  toolbar: {
    height: TOOLBAR_HEIGHT
  },
  dropdown: {
    marginRight: 0
  },
  search: {
    height: TOOLBAR_HEIGHT
  }
}

type Character = {
  firstName: string,
  lastName: string,
  actorFirstName: string,
  actorLastName: string,
  seasons: Array<number>
}

export const TheWireCharacters = React.createClass({
  propTypes: {
    fetchCharacters: React.PropTypes.func.isRequired,
    searchCharacters: React.PropTypes.func.isRequired,
    filterCharacters: React.PropTypes.func.isRequired,
    errorMsg: React.PropTypes.string,
    keyword: React.PropTypes.string.isRequired,
    visibilityFilter: React.PropTypes.string.isRequired,
    characters: React.PropTypes.array.isRequired,
    visibleCharacters: React.PropTypes.array.isRequired,
    visibleCharactersFiltered: React.PropTypes.array.isRequired
  },

  componentDidMount () {
    this.props.fetchCharacters()
  },

  _filterCharacters (event: Event, index: number, value: string) {
    this.props.filterCharacters(value)
  },

  _searchCharacters (event: Event, value: string) {
    this.props.searchCharacters(value)
  },

  render () {
    return this.props.errorMsg
      ? <div>Error! {this.props.errorMsg}</div>
      : (
      <div>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup>
            <ToolbarTitle text='Search' />
            <DropDownMenu
              style={styles.dropdown}
              value={this.props.visibilityFilter}
              onChange={this._filterCharacters}
            >
              <MenuItem value='SHOW_ALL' primaryText='All Seasons' />
              <MenuItem value='SHOW_SEASON_1' primaryText='Season 1' />
              <MenuItem value='SHOW_SEASON_2' primaryText='Season 2' />
              <MenuItem value='SHOW_SEASON_3' primaryText='Season 3' />
              <MenuItem value='SHOW_SEASON_4' primaryText='Season 4' />
              <MenuItem value='SHOW_SEASON_5' primaryText='Season 5' />
            </DropDownMenu>
            <ToolbarTitle text='of The Wire for' />
            <TextField
              name='keyword'
              style={styles.search}
              value={this.props.keyword}
              onChange={this._searchCharacters}
            />
          </ToolbarGroup>
        </Toolbar>

        <Table height='100%' fixedHeader fixedFooter selectable multiSelectable>
          <TableHeader displaySelectAll adjustForCheckbox enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Character</TableHeaderColumn>
              <TableHeaderColumn>Actor</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox deselectOnClickaway showRowHover={false} stripedRows={false}>
            {this.props.visibleCharactersFiltered.map((row: Character, index: number) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{`${row.firstName} ${row.lastName}`}</TableRowColumn>
                <TableRowColumn>{`${row.actorFirstName} ${row.actorLastName}`}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
})

export default TheWireCharacters
