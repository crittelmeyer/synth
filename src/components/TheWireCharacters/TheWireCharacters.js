/* @flow */
import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
  TextField, DropDownMenu, MenuItem, Paper,
  Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'
import { globalStyles, currentTheme } from 'styles/js/global_styles'

const TOOLBAR_HEIGHT = 56

const styles = {
  toolbar: {
    backgroundColor: currentTheme.palette.canvasColor,
    height: TOOLBAR_HEIGHT,
    marginBottom: globalStyles.STANDARD_SPACING
  },
  dropdown: {
    marginRight: 0
  },
  search: {
    height: TOOLBAR_HEIGHT
  }
}

type Character = {
  id: string,
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
  errorMsg: String,
  keyword: String,
  visibilityFilter: String,
  characters: Array<Character>,
  visibleCharacters: Array<Character>,
  visibleCharactersFiltered: Array<Character>
}

export class TheWireCharacters extends React.Component {
  constructor(props: Props) {
    super(props)
    this.filterCharacters = this.filterCharacters.bind(this)
    this.searchCharacters = this.searchCharacters.bind(this)
  }

  componentDidMount () {
    this.props.fetchCharacters()
  }

  filterCharacters: () => void;
  filterCharacters (event: Event, index: number, value: string) {
    this.props.filterCharacters(value)
  }

  searchCharacters: () => void;
  searchCharacters (event: Event, value: string) {
    this.props.searchCharacters(value)
  }

  render () {
    return this.props.errorMsg
      ? <div>Error! {this.props.errorMsg}</div>
      : (
      <div>
        <Paper zDepth={2}>
          <Toolbar style={styles.toolbar}>
            <ToolbarGroup>
              <ToolbarTitle text="Search" />
              <DropDownMenu
                style={styles.dropdown}
                value={this.props.visibilityFilter}
                onChange={this.filterCharacters}
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
                onChange={this.searchCharacters}
              />
            </ToolbarGroup>
          </Toolbar>
        </Paper>

        <Paper zDepth={2}>
          <Table height="100%" fixedHeader fixedFooter selectable multiSelectable>
            <TableHeader displaySelectAll adjustForCheckbox enableSelectAll={false}>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Character</TableHeaderColumn>
                <TableHeaderColumn>Actor</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox deselectOnClickaway showRowHover={false} stripedRows={false}>
              {this.props.visibleCharactersFiltered.map((row: Character, index: number) => (
                <TableRow key={row.id}>
                  <TableRowColumn>{index}</TableRowColumn>
                  <TableRowColumn>{`${row.firstName} ${row.lastName}`}</TableRowColumn>
                  <TableRowColumn>{`${row.actorFirstName} ${row.actorLastName}`}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default TheWireCharacters
