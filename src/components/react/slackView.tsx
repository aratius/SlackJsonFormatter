import React from 'react'
import Message from './common/message'
import { MessageData } from './common/message'

interface Props {
  messages: any
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
            this.props.messages.map((data: any, key: any) => {
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