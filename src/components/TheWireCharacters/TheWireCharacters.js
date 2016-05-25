/* @flow */
import React from 'react'
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui'
import { TextField, DropDownMenu, MenuItem } from 'material-ui'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui'

type Character = {
  firstName: string,
  lastName: string,
  actorFirstName: string,
  actorLastName: string,
  seasons: Array<number>
}

type Props = {
  fetchCharacters: Function,
  searchCharacters: Function,
  filterCharacters: Function,
  errorMsg: string,
  keyword: string,
  visibilityFilter: string,
  characters: Array<Character>,
  visibleCharacters: Array<Character>,
  visibleCharactersFiltered: Array<Character>
}

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

export class TheWireCharacters extends React.Component {
  props: Props;

  componentDidMount() {
    this.props.fetchCharacters()
  }

  render() {
    return this.props.errorMsg
      ? <div>Error! {this.props.errorMsg}</div>
      : (
      <div>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup>
            <ToolbarTitle text="Search" />
            <DropDownMenu
              style={styles.dropdown}
              value={this.props.visibilityFilter}
              onChange={(event, index, value) => this.props.filterCharacters(value)}
            >
              <MenuItem value="SHOW_ALL" primaryText="All Seasons" />
              <MenuItem value="SHOW_SEASON_1" primaryText="Season 1" />
              <MenuItem value="SHOW_SEASON_2" primaryText="Season 2" />
              <MenuItem value="SHOW_SEASON_3" primaryText="Season 3" />
              <MenuItem value="SHOW_SEASON_4" primaryText="Season 4" />
              <MenuItem value="SHOW_SEASON_5" primaryText="Season 5" />
            </DropDownMenu>
            <ToolbarTitle text="of The Wire for" />
            <TextField
              name="keyword"
              style={styles.search}
              value={this.props.keyword}
              onChange={(event, value) => this.props.searchCharacters(value)}
            />
          </ToolbarGroup>
        </Toolbar>

        <Table height="100%" fixedHeader={true} fixedFooter={true} selectable={true} multiSelectable={false}>
          <TableHeader displaySelectAll={true} adjustForCheckbox={true} enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Character</TableHeaderColumn>
              <TableHeaderColumn>Actor</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={true} deselectOnClickaway={true} showRowHover={false} stripedRows={false}>
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
}

const characterShape = React.PropTypes.shape({
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  actorFirstName: React.PropTypes.string,
  actorLastName: React.PropTypes.string,
  seasons: React.PropTypes.arrayOf(React.PropTypes.number).isRequired
})

TheWireCharacters.propTypes = {
  fetchCharacters: React.PropTypes.func.isRequired,
  searchCharacters: React.PropTypes.func.isRequired,
  filterCharacters: React.PropTypes.func.isRequired,
  errorMsg: React.PropTypes.string,
  keyword: React.PropTypes.string.isRequired,
  visibilityFilter: React.PropTypes.string.isRequired,
  characters: React.PropTypes.arrayOf(characterShape).isRequired,
  visibleCharacters: React.PropTypes.arrayOf(characterShape).isRequired,
  visibleCharactersFiltered: React.PropTypes.arrayOf(characterShape).isRequired
}

export default TheWireCharacters
