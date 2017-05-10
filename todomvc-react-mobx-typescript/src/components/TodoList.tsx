import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export class TodoList extends Component<{}, void> {
  public render() {
    return (
      <ul>
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" defaultChecked={true} />
            <label>Taste JavaScript</label>
            <button className="destroy" />
          </div>
          <input className="edit" defaultValue="Create a TodoMVC template" />
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Buy a unicorn</label>
            <button className="destroy" />
          </div>
          <input className="edit" defaultValue="Rule the web" />
        </li>
      </ul>
    )
  }
}