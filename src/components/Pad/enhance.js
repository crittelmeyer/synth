/* @flow */
import React from 'react'
import { compose, branch, renderComponent, withHandlers } from 'recompose'

type ErrorMsgProps = {
  errorMsg: String,
  onTap: Function,
  sample: String
}

const ErrorMsg = (props: ErrorMsgProps) => <div>Error! {props.errorMsg}</div>
const identity = (t) => t

export const enhance = compose(
  branch(
    (props) => props.errorMsg,
    renderComponent(ErrorMsg),
    identity
  ),
  withHandlers({
    handleTap: (props: Props) => () => {
      props.onTap(props.sample)
    }
  })
)

export default enhance
