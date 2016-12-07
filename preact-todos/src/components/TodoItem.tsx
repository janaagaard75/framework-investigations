import { Component } from "preact"

interface TodoProps {
  onClick: () => void,
  completed: boolean,
  text: string
}

export class TodoItem extends Component<TodoProps, void> {
  public render() {
    return (
      <li
        onClick={() => this.props.onClick()}
        style={{
          cursor: "pointer",
          textDecoration: this.props.completed ? "line-through" : "none"
        }}
      >
        {this.props.text}
      </li>
    )
  }
}