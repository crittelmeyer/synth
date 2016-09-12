import { configure } from '@kadira/storybook'

function loadStories() {
  require('../stories/Oscillator')
  require('../stories/Synthesizer')
}

configure(loadStories, module)
