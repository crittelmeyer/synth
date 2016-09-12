/* @flow */
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import StoryContainer from './StoryContainer'
import Oscillator from 'components/Oscillator'

storiesOf('Oscillator', module)
  .add('standard', () => (
    <StoryContainer>
      <Oscillator src="/samples/HT00.WAV" name="High Tom" color="green" onTap={action('redux action hit')} />
    </StoryContainer>
  ))
  .add('error', () => (
    <StoryContainer>
      <Oscillator errorMsg="this is an error!" />
    </StoryContainer>
  ))
