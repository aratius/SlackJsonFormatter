import React from 'react'

export default class Layout extends React.Component {

  transitionContainer: HTMLElement
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

}