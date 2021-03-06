import * as React from 'react'
import { Component } from 'react'

interface Props {
  [index: string]: any
  color?: 'primary' | 'secondary'
  type?: 'button' | 'reset' | 'submit'
}

export class GenericButton extends Component<Props, void> {
  public static defaultProps: Props = {
    color: 'primary',
    type: 'button'
  }

  public render() {
    // This construction adds color as an attribute to the button. :-/
    return (
      <button {...this.props} className={'btn btn-' + this.props.color}>
        {this.props.children}
      </button>
    )
  }
}