import * as React from 'react'

interface LinkPropTypes {
  active: boolean,
  children: React.ReactChildren,
  onClick: () => void
}

export class Link extends React.Component<LinkPropTypes, any> {
  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>
    }

    return (
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