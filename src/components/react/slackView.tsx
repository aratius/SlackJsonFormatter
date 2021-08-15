import React from 'react'
import { Message } from '../config/interfaces'
import ChannelDetail from './channelDetail/channelDetail'
import ChannelList from './channelList/channelList'
import FileUploader from './fileUploader/fileUploader'
import SiteHeader from './siteHeader/siteHeader'
import styles from "../../styles/layout/slackView.module.scss"

interface Props{}

export default class SlackView extends React.Component<Props> {

  state: {
    messageData: Message[],
    targetChannel: string,
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
   * チャンネル選択
   */
  private onChooseChannel = (name: string): void => {
    this.setState({targetChannel: name})
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

    // チャンネル種類するならここ
    const channelNames: string[] = []
    // チャンネル絞り込み
    const channelDetail: Message[] = []

    return (
      <main className={styles.container}>
        {/* LEFT */}
        <div className={styles.sideBar}>
          {/* サイトのタイトル */}
          <SiteHeader />

          {/* チャンネル一覧 */}
          <ChannelList
            channelNames={channelNames}
            onChooseChannel={this.onChooseChannel}
          />

          {/* ファイルアップロードUI */}
          <FileUploader
            onChooseFile={this.handleChooseFile}
          />
        </div>

        {/* RIGHT */}
        <div className={styles.channelView}>
          {/* チャンネル詳細 */}
          <ChannelDetail
            messageData={this.state.messageData}
            channelName={this.state.targetChannel}
          />
        </div>
      </main>
    )
  }
}