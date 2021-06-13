import React from 'react'

interface Props {
  messageData: JSON
}

/**
 * 一つのメッセージ
 */
export default class Message extends React.Component<Props> {

  render() {
    console.log(this.props.messageData);

    return (
      <>
      </>
    )
  }

}