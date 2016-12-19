import * as React from "react"
import { Component } from "react"

type Color = "default" | "secondary"

// TODO: Consider using this trick: http://chenglou.github.io/react/docs/reusable-components.html#transferring-props-a-shortcut
interface Props {
  color: Color
  onClick: (e: React.FormEvent<HTMLButtonElement>) => any
  outline?: boolean,
  type: "button" | "reset" | "submit"
}

export class Button extends Component<Props, void> {
  constructor(props: Props, context?: any) {
    super(props, context)

    if (this.props.outline === undefined) {
      this.outline = false
    }
    else {
      this.outline = this.props.outline
    }
  }

  public static defaultProps = {
    outline: true
  }

  private outline: boolean

  public render() {
    return (
      <button type={this.props.type} className="btn btn-default" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}