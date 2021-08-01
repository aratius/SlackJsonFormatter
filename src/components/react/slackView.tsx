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

  handleReadFile = async (e: any) => {
    const messageTasks: any = []
    console.log(e.target.files.length);

    for(let i = 0; i < e.target.files.length; i++) {

      messageTasks.push(new Promise<any>((res, rej) => {

        const reader = new FileReader()
        reader.onload = (event: any) => {
          const msgs = JSON.parse(event.target.result);

          res(msgs)
        }

        reader.readAsText(e.target.files[i])

      }))
    }

    const files = await Promise.all(messageTasks)
    const messages: any = []
    for(const i in files) {
      const file: any = files[i]
      for(const j in file) {
        messages.push(file[j])
      }
    }

    if(this.state.messageData.length > 0) messages.concat(this.state.messageData)

    this.setState({
      ...this.state,
      messageData: messages
    })

  }

  render() {

    // TODO: チャンネルごとに分けて、日付順でソート
    console.log(this.state.messageData);

    return (
      <>
        {/* slackぽい カードの外枠 */}
        <div>
          {/* ts的にエラーが出る */}
          {/* ディレクトリ */}
          <input
            type="file"
            name="hello"
            /* @ts-expect-error */  // エラーを強制的に黙らせる https://qiita.com/minorin22/items/0a8354a81039ea3700a2
            webkitdirectory=""
            directory=""
            multiple
            onChange={this.handleReadFile}
          />
          {/* ファイル選択 */}
          <input
            type="file"
            name="hello"
            multiple
            onChange={this.handleReadFile}
          />

          {/* メッセージあるだけループ回す */}
          {/* TODO: 日付順に並び替え */}
          {/* 授業別ならタブ分ける */}
          <ul>
            {this.state.messageData &&
            this.state.messageData.length > 0 &&
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