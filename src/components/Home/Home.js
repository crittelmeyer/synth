import React from 'react'
import enhance from './enhance'

type Props = {

}

export const Home = (props: Props) => (
  <div>This is home: {props.board.name}</div>
)

export default enhance(Home)
