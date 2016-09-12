import React from 'react'
import enhance from './enhance'
import Tappable from 'react-tappable'

type Props = {
  name: String,
  handleTap: Function
}

export const Pad = (props: Props) => (
  <Tappable onTap={props.handleTap}>
    {props.name}
  </Tappable>
)

export default enhance(Pad)
