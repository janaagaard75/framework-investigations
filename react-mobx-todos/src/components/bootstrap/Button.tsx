import * as React from "react"
import { Component } from "react"

type Color = "default" | "secondary"

interface Props {
  [index: string]: any
  color?: "primary" | "secondary"
  type?: "button" | "reset" | "submit"
}

export class Button extends Component<Props, void> {
  public static defaultProps: Props = {
    color: "primary",
    type: "button"
  }

  public render() {
    return (
      <button {...this.props} className={"btn btn-" + this.props.color}>
        {this.props.children}
      </button>
    )
  }
}