import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { Store } from '../model/Store'

interface Props {
  store: Store
}

@observer
export class InProgress extends Component<Props, void> {
  public render() {
    return (
      <p>{this.props.store.addTodoInProgress ? 'Adding...' : ''}</p>
    )
  }
}