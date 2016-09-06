/* @flow */
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import StoryContainer from './StoryContainer'
import Pad from 'components/Pad'

storiesOf('Pad', module)
  .add('standard', () => (
    <StoryContainer>
      <Pad src="/samples/HT00.WAV" name="High Tom" color="green" onTap={action('redux action hit')} />
    </StoryContainer>
  ))
  .add('error', () => (
    <StoryContainer>
      <Pad errorMsg="this is an error!" />
    </StoryContainer>
  ))
