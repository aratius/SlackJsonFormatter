import React from 'react'
import { Message } from '../config/interfaces'
import { getFiles } from '../utils/file'
import ChannelDetail from './channelDetail/channelDetail'
import MessageRouter from './channelDetail/message/messageRouter'
import ChannelList from './channelList/channelList'
import FileUploader from './fileUploader/fileUploader'
import SiteHeader from './siteHeader/siteHeader'

interface Props{}

export default class SlackView extends React.Component{

  state: {
    messageData: Message[],
    targetChannel: string
    [extraProps: string]: any; // これでどんな属性も受け取れるようになる。
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      messageData: [],
      targetChannel: "#hoge"
    }
  }

  /**
   * ファイル選択
   */
  handleChooseFile = async (_messages: any) => {
    const messages: any = [..._messages]
    if(this.state.messageData.length > 0) messages.concat(this.state.messageData)

    this.setState({
      ...this.state,
      messageData: messages
    })

  }

  render() {

    return (
      <main>
        {/* LEFT */}
        <div>
          {/* サイトのタイトル */}
          <SiteHeader />

          {/* チャンネル一覧 */}
          <ChannelList />

          {/* ファイルアップロードUI */}
          <FileUploader
            onChooseFile={this.handleChooseFile}
          />
        </div>

        {/* RIGHT */}
        <div>
          {/* チャンネル詳細 */}
          <ChannelDetail
            messageData={this.state.messageData}
          />

        </div>
      </main>
    )
  }
}