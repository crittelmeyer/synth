import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import { fade } from 'material-ui/utils/colorManipulator'
import tillurTheme from 'shared/themes/default'

export const theme = {
  ...baseTheme,
  ...tillurTheme,
  paper: {
    zDepthShadows: tillurTheme.zDepthShadows.map((d) => (
      `0 ${d[0]}px ${d[1]}px -10px ${fade(baseTheme.palette.shadowColor, d[2])},
       0 ${d[3]}px ${d[4]}px -10px ${fade(baseTheme.palette.shadowColor, d[5])}`
    ))
  }
}

export default theme
