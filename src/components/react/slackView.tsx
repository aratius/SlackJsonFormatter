import React from 'react'
import MessageRouter from './messageComponent/messageRouter'

interface Props{}

export default class SlackView extends React.Component{

  state: {
    [extraProps: string]: any; // これでどんな属性も受け取れるようになる。
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      messageData: []
    }
  }

  handleReadFile = (e: any) => {
    for(let i = 0; i < e.target.files.length; i++) {
      const reader = new FileReader()
      reader.onload = (event: any) => {
        const messages = JSON.parse(event.target.result);
        const data = this.state.messageData.length > 0 ? messages.concat(this.state.messageData) : messages

        this.setState({
          ...this.state,
          messageData: data
        })
      }

      reader.readAsText(e.target.files[i])
    }

    console.log(this.state.messageData);

  }

  render() {

    return (
      <>
        {/* slackぽい カードの外枠 */}
        <div>
          <input type="file" multiple onChange={this.handleReadFile} />

          {/* メッセージあるだけループ回す */}
          {/* TODO: 日付順に並び替え */}
          {/* 授業別ならタブ分ける
           */}
          <ul>
            {this.state.messageData &&
            this.state.messageData.length &&
            this.state.messageData.map((data: any, key: any) => {
              return(
                <React.Fragment key={key}>
                  <MessageRouter
                    data={data}
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