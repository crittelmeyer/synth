/* @flow */
import React from 'react'
import { compose, branch, renderComponent } from 'recompose'

type ErrorMsgProps = {
  errorMsg: String
}

const ErrorMsg = (props: ErrorMsgProps) => <div>Error! {props.errorMsg}</div>
const identity = (t) => t

export const enhance = compose(
  branch(
    (props) => props.errorMsg,
    renderComponent(ErrorMsg),
    identity
  )
)

export default enhance
