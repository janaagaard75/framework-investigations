import * as React from 'react'
import { Component } from 'react'

interface Props {
  color: 'primary' | 'secondary'
}

export class SubmitButton extends Component<Props, void> {
  constructor(props: Props, context?: any) {
    super(props, context)
  }

  public render() {
    const className = `btn btn-${this.props.color}`

    return (
      <button type="submit" className={className}>
        {this.props.children}
      </button>
    )
  }
}