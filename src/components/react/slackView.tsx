import React from 'react'
import Message from './common/message'

interface Props {
  messages: JSON[]
}

export default class SlackView extends React.Component<Props> {

  render() {

    return (
      <>
        {/* slackぽい カードの外枠 */}
        <div>

          {/* メッセージあるだけループ回す */}
          <ul>
            {this.props.messages &&
            this.props.messages.length &&
            this.props.messages.map((data, key) => {
              return(
                <React.Fragment key={key}>
                  <Message messageData={data} />
                </React.Fragment>
              )
            })
            }
          </ul>
        </div>
      </>
    )
  }

}