import React from 'react'
import enhance from './enhance'
import { Song, Sequencer, Sampler } from 'react-music'
import Pad from 'components/Pad'
import { v4 } from 'node-uuid'

type Props = {
  name: String,
  pads: Array<Object>
}

export const PadGrid = (props: Props) => (
  <div>
    <Song tempo={90}>
      <Sequencer resolution={16} bars={1}>
        {props.pads.map((pad) => (
          <Sampler
            key={v4()}
            sample={pad.sample}
            steps={[0, 4, 8, 12]}
          />
        ))}
      </Sequencer>
    </Song>
    {props.pads.map((pad) => (
      <Pad key={v4()} sample={pad.sample} name={pad.name} color={pad.color} />
    ))}
  </div>
)

export default enhance(PadGrid)
