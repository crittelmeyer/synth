import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import { fade } from 'material-ui/utils/colorManipulator'

// NOTE: originally this was in shared/themes/default which was part of the "shared" submodule repo
const hiveTheme = {
  zDepthShadows: [
    [1, 6, 0.12, 1, 4, 0.12],
    [13, 13, 0.16, 13, 13, 0.23],
    [10, 30, 0.19, 6, 10, 0.23],
    [14, 45, 0.25, 10, 18, 0.22],
    [19, 60, 0.30, 15, 20, 0.22]
  ],
  palette: {
    primary1Color: '#7cb342',
    textColor: '#9e9e9e',
    alternateTextColor: '#ffffff',
    canvasColor: '#ffffff',
    alternateCanvasColor: '#e0e0e0',
    darkCanvasColor: '#212121'
  }
}

export const theme = {
  ...baseTheme,
  ...hiveTheme,
  paper: {
    zDepthShadows: hiveTheme.zDepthShadows.map((d) => (
      `0 ${d[0]}px ${d[1]}px -10px ${fade(baseTheme.palette.shadowColor, d[2])},
       0 ${d[3]}px ${d[4]}px -10px ${fade(baseTheme.palette.shadowColor, d[5])}`
    ))
  }
}

export default theme
