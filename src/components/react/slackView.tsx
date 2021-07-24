import React from 'react'
import MessageRouter from './common/MessageRouter'

interface Props{}

export default class SlackView extends React.Component{

  state: {
    [extraProps: string]: any; // これでどんな属性も受け取れるようになる。
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      messaageData: []
    }
  }

  handleReadFile = (e: any) => {
    const reader = new FileReader()
    reader.onload = (event: any) => {
      const messages = JSON.parse(event.target.result);

      this.setState({
        messageData: messages
      })
    }
    reader.readAsText(e.target.files[0])

  }

  render() {

    return (
      <>
        {/* slackぽい カードの外枠 */}
        <div>

          <input type="file" multiple onChange={this.handleReadFile} />

          {/* メッセージあるだけループ回す */}
          <ul>
            {this.state.messageData &&
            this.state.messageData.length &&
            this.state.messageData.map((data: any, key: any) => {
              return(
                <React.Fragment key={key}>
                  <MessageRouter
                    msg={data}
                  />
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