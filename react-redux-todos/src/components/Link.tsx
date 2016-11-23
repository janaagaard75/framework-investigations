import * as React from 'react'

interface LinkPropTypes {
  active: boolean,
  children: React.ReactChildren,
  onClick: () => void
}

export class Link extends React.Component<LinkPropTypes, void> {
  public render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>
    }

    return (
      // TODO: Figure out how to remove the href="#". Possibly by using a span element instead. This would also remove the need for the call to preventDefault.
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          this.props.onClick()
        }}
      >
        {this.props.children}
      </a>
    )
  }
}