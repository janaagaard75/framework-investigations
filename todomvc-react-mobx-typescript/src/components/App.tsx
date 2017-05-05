import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export class App extends Component<{}, void> {
  public render() {
    return (
      <div>
        App.tsx
      </div>
    )
  }
}