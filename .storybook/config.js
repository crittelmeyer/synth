import { configure } from '@kadira/storybook'

function loadStories() {
  require('../stories/Pad')
  require('../stories/PadGrid')
}

configure(loadStories, module)
