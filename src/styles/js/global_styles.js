import theme from './themes/tillurDefault'

// standard padding/margin sizes
// NOTE: since we are able to use the CSS calc() function, it's fairly common
// to do something like calc(100% - leftPadding - rightPadding), which,
// since left and right padding are typically equal, can be refactored to
// calc(100% - (padding * 2)) - that's where DBL_STANDARD_SPACING,
// for instance, gets enough usage to justify this abstraction.
const STANDARD_SPACING = 20
const DBL_STANDARD_SPACING = STANDARD_SPACING * 2
const HALF_STANDARD_SPACING = STANDARD_SPACING / 2

const STANDARD_FONT_SIZE = 13
const BIG_FONT_SIZE = STANDARD_FONT_SIZE * 2

const ICON_SIZE = 40
const BIG_ICON_SIZE = 60

export const globalStyles = {
  STANDARD_SPACING,
  HALF_STANDARD_SPACING,
  DBL_STANDARD_SPACING,

  STANDARD_FONT_SIZE,
  BIG_FONT_SIZE,

  ICON_SIZE,
  BIG_ICON_SIZE,

  flexContainer: { display: 'flex' },
  flexFullWidth: { flex: '1' }
}

export var currentTheme = theme

export default { globalStyles, currentTheme }
