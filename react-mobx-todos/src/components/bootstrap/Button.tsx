import * as React from "react"
import { Component } from "react"
import { FormEvent } from "react"

interface Props {
  color: "primary" | "secondary"
  onClick: (e?: FormEvent<HTMLButtonElement>) => void
}

export class Button extends Component<Props, void> {
  constructor(props: Props, context?: any) {
    super(props, context)
  }

  public render() {
    const className = `btn btn-${this.props.color}`

    return (
      <button type="button" className={className} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}