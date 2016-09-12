import React from 'react'
import enhance from './enhance'
import { Song, Sequencer, Synth } from 'react-music'
import Oscillator from 'components/Oscillator'

type Props = {
  name: String,
  pads: Array<Object>
}

export const Synthesizer = (props: Props) => (
  <div>
    <Song tempo={90} playing={false}>
      <Sequencer resolution={16} bars={1}>
        <Synth
          type="sawtooth"
          steps={[
            [0, 2, 'c3']
          ]}
        />
      </Sequencer>
    </Song>
    <Oscillator wave="sawtooth" />
  </div>
)

export default enhance(Synthesizer)
