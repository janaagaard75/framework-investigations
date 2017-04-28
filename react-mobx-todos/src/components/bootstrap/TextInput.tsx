import * as React from 'react'
import { Component } from 'react'
import { FormEvent } from 'react'

interface Props {
  handleChange: (formEvent: FormEvent<HTMLInputElement>) => void
  text: string
}

export class TextInput extends Component<Props, void> {
  public render() {
    return (
      <input type="text" className="form-control" value={this.props.text} onChange={this.props.handleChange}/>
    )
  }
}