import { Component } from "preact"

interface AddTodoProps {
  addTodo: (text: string) => void
}

interface AddTodoState {
  text: string
}

export class AddTodo extends Component<AddTodoProps, AddTodoState> {
  constructor(props: AddTodoProps) {
    super(props)

    this.state = {
      text: ""
    }
  }

  private handleChange(formEvent: Event) {
    this.setState({ text: (formEvent.currentTarget as HTMLInputElement).value })
  }

  private handleSubmit(formEvent: Event) {
    formEvent.preventDefault()

    const trimmedText = this.state.text.trim()
    if (trimmedText.length === 0) {
      return
    }

    this.props.addTodo(trimmedText)
    this.setState({
      text: ""
    })
  }

  public render() {
    return (
      <div>
        <form onSubmit={formEvent => this.handleSubmit(formEvent)}>
          <input
            type="text"
            value={this.state.text}
            onChange={formEvent => this.handleChange(formEvent)}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}