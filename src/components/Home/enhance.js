/* @flow */
import React from 'react'
import { compose, lifecycle, branch, renderComponent } from 'recompose'

type ErrorMsgProps = {
  errorMsg: String
}

const ErrorMsg = (props: ErrorMsgProps) => <div>Error! {props.errorMsg}</div>
const identity = (t) => t

export const enhance = compose(
  lifecycle({
    componentDidMount() {
      this.props.fetchBoard() // eslint-disable-line immutable/no-this
    }
  }),
  branch(
    (props) => props.errorMsg,
    renderComponent(ErrorMsg),
    identity
  )
)

export default enhance
