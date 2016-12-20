import * as React from "react"
import { Component } from "react"

type Color = "default" | "secondary"

// TODO: Consider using this trick: http://chenglou.github.io/react/docs/reusable-components.html#transferring-props-a-shortcut

type Props = React.HTMLProps<JSX.Element> & {
  color?: "default" | "secondary"
  type?: "button" | "reset" | "submit"
}

class Button extends Component<Props, void> {
  public static defaultProps: Props = {
    color: "default",
    type: "button"
  }

  public render() {
    return (
      <button {...this.props}>
        {this.props.children}
      </button>
    )
  }
}

export { Button }