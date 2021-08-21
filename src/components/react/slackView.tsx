import React from 'react'
import { Message } from '../config/interfaces'
import ChannelDetail from './channelDetail/channelDetail'
import ChannelList from './channelList/channelList'
import FileUploader from './fileUploader/fileUploader'
import SiteHeader from './siteHeader/siteHeader'
import styles from "../../styles/layout/slackView.module.scss"

// コーディング用ダミー
const jsons = [{"client_msg_id":"a75ae33b-4380-4b6d-9641-d881167e129a","type":"message","text":"今日の出欠\n<https://docs.google.com/forms/d/e/1FAIpQLSdPf4G-fmG5UY0Jw2xEWASK95KZMaCpRLQ4QuzP89LLG9lH_g/viewform?usp=sf_link>\n\n提出確認\n<https://docs.google.com/spreadsheets/d/1uTJKkQ3jP5hmgU8swal7GWs9drVE_GdrCxVMflX0kC8/edit?usp=sharing>","user":"U010JEB8FRT","ts":"1620458728.002000","team":"TUMJBAN9Z","user_team":"TUMJBAN9Z","source_team":"TUMJBAN9Z","user_profile":{"avatar_hash":"cfb1f210ce0e","image_72":"https://avatars.slack-edge.com/2020-03-24/1022509395861_cfb1f210ce0e896d1d55_72.jpg","first_name":"平原真","real_name":"平原真","display_name":"teacher_平原真","team":"TUMJBAN9Z","name":"mail","is_restricted":false,"is_ultra_restricted":false},"blocks":[{"type":"rich_text","block_id":"Ecvw","elements":[{"type":"rich_text_section","elements":[{"type":"text","text":"今日の出欠\n"},{"type":"link","url":"https://docs.google.com/forms/d/e/1FAIpQLSdPf4G-fmG5UY0Jw2xEWASK95KZMaCpRLQ4QuzP89LLG9lH_g/viewform?usp=sf_link"},{"type":"text","text":"\n\n提出確認\n"},{"type":"link","url":"https://docs.google.com/spreadsheets/d/1uTJKkQ3jP5hmgU8swal7GWs9drVE_GdrCxVMflX0kC8/edit?usp=sharing"}]}]}]},{"client_msg_id":"40cbe5b8-8d9a-46f5-bdb0-15264f86c43e","type":"message","text":"let myImage;\n\nfunction preload() {\n\tmyImage= loadImage(“character_kinoko.png”);\t\n}\n\nfunction setup() {\n\tcreateCanvas( 800,800 )\n\timageMode(CENTER)\n}\n\nfunction draw(){\n\tbackground(255,255,255,);\n\tImage(myImage,mouseX,mouseY,100,100);\n}","user":"U01H44CRZ6J","ts":"1620628490.002200","team":"TUMJBAN9Z","user_team":"TUMJBAN9Z","source_team":"TUMJBAN9Z","user_profile":{"avatar_hash":"2e36d3c43b0f","image_72":"https://avatars.slack-edge.com/2021-04-07/1948382694769_2e36d3c43b0f22de0b2b_72.png","first_name":"X21027_萩野　媛","real_name":"X21027_萩野　媛","display_name":"","team":"TUMJBAN9Z","name":"e300n","is_restricted":false,"is_ultra_restricted":false},"blocks":[{"type":"rich_text","block_id":"jfu","elements":[{"type":"rich_text_section","elements":[{"type":"text","text":"let myImage;\n\nfunction preload() {\n\tmyImage= loadImage(“character_kinoko.png”);\t\n}\n\nfunction setup() {\n\tcreateCanvas( 800,800 )\n\timageMode(CENTER)\n}\n\nfunction draw(){\n\tbackground(255,255,255,);\n\tImage(myImage,mouseX,mouseY,100,100);\n}"}]}]}]},{"client_msg_id":"1b8a06ae-04b5-404a-b212-abbfda433b5d","type":"message","text":"今日の出欠\n<https://docs.google.com/forms/d/e/1FAIpQLSfEMqnYPlOY75vHQd7ZjeH7gN7QoKDB8-1iCce4MZp-WkCg9w/viewform?usp=sf_link>\n\n確認\n<https://docs.google.com/spreadsheets/d/12i9d2OBMRaj5TtWr4MLB_GkqILrvYVAqKXUJP3QT9Zk/edit?usp=sharing>","user":"U010JEB8FRT","ts":"1620631676.002600","team":"TUMJBAN9Z","user_team":"TUMJBAN9Z","source_team":"TUMJBAN9Z","user_profile":{"avatar_hash":"cfb1f210ce0e","image_72":"https://avatars.slack-edge.com/2020-03-24/1022509395861_cfb1f210ce0e896d1d55_72.jpg","first_name":"平原真","real_name":"平原真","display_name":"teacher_平原真","team":"TUMJBAN9Z","name":"mail","is_restricted":false,"is_ultra_restricted":false},"blocks":[{"type":"rich_text","block_id":"A1UH","elements":[{"type":"rich_text_section","elements":[{"type":"text","text":"今日の出欠\n"},{"type":"link","url":"https://docs.google.com/forms/d/e/1FAIpQLSfEMqnYPlOY75vHQd7ZjeH7gN7QoKDB8-1iCce4MZp-WkCg9w/viewform?usp=sf_link"},{"type":"text","text":"\n\n確認\n"},{"type":"link","url":"https://docs.google.com/spreadsheets/d/12i9d2OBMRaj5TtWr4MLB_GkqILrvYVAqKXUJP3QT9Zk/edit?usp=sharing"}]}]}]},{"client_msg_id":"b2703984-3511-48a3-bb0d-8af33dfc4712","type":"message","text":"今日の出欠\n<https://docs.google.com/forms/d/e/1FAIpQLSf3ucWnJx3UwXaL7iJGnueprfQjgYVvZpUaoCXLYIztdZqFQg/viewform?usp=sf_link>\n\n確認\n<https://docs.google.com/spreadsheets/d/1wY9-GRvrtJs8Yq10GPbZPW48BN_gKA8Z5kzrdVjtTzo/edit?usp=sharing>","user":"U010JEB8FRT","ts":"1621840705.000400","team":"TUMJBAN9Z","user_team":"TUMJBAN9Z","source_team":"TUMJBAN9Z","user_profile":{"avatar_hash":"cfb1f210ce0e","image_72":"https://avatars.slack-edge.com/2020-03-24/1022509395861_cfb1f210ce0e896d1d55_72.jpg","first_name":"平原真","real_name":"平原真","display_name":"teacher_平原真","team":"TUMJBAN9Z","name":"mail","is_restricted":false,"is_ultra_restricted":false},"blocks":[{"type":"rich_text","block_id":"mvH","elements":[{"type":"rich_text_section","elements":[{"type":"text","text":"今日の出欠\n"},{"type":"link","url":"https://docs.google.com/forms/d/e/1FAIpQLSf3ucWnJx3UwXaL7iJGnueprfQjgYVvZpUaoCXLYIztdZqFQg/viewform?usp=sf_link"},{"type":"text","text":"\n\n確認\n"},{"type":"link","url":"https://docs.google.com/spreadsheets/d/1wY9-GRvrtJs8Yq10GPbZPW48BN_gKA8Z5kzrdVjtTzo/edit?usp=sharing"}]}]}]},{"client_msg_id":"3273b128-bd4f-4ce4-9b4c-9e1abaa50c3a","type":"message","text":"出欠\n<https://forms.gle/Hyq31yKvBitG74ESA>\n\n確認\n<https://docs.google.com/spreadsheets/d/1xJt6RNuA4o_DG_ebAuKTBZp9sZZ_usg6WtAM0I5sUYs/edit?usp=sharing>","user":"U010JEB8FRT","ts":"1622445635.000400","team":"TUMJBAN9Z","user_team":"TUMJBAN9Z","source_team":"TUMJBAN9Z","user_profile":{"avatar_hash":"cfb1f210ce0e","image_72":"https://avatars.slack-edge.com/2020-03-24/1022509395861_cfb1f210ce0e896d1d55_72.jpg","first_name":"平原真","real_name":"平原真","display_name":"teacher_平原真","team":"TUMJBAN9Z","name":"mail","is_restricted":false,"is_ultra_restricted":false},"attachments":[{"service_name":"Google Docs","title":"アートプログラミング基礎 [8]","title_link":"https://forms.gle/Hyq31yKvBitG74ESA","fallback":"Google Docs: アートプログラミング基礎 [8]","image_url":"https://lh3.googleusercontent.com/ncR5Na5KLX-HDaNMxlbVVNcsYAvFzI9CT9nIqdgrK_S8yvxWEm-32WqZUb4MMEctRqV74xKArDs","image_width":333,"image_height":250,"from_url":"https://forms.gle/Hyq31yKvBitG74ESA","image_bytes":32487,"service_icon":"http://ssl.gstatic.com/docs/forms/device_home/ios_120.png","id":1,"original_url":"https://forms.gle/Hyq31yKvBitG74ESA"}],"blocks":[{"type":"rich_text","block_id":"g+8YR","elements":[{"type":"rich_text_section","elements":[{"type":"text","text":"出欠\n"},{"type":"link","url":"https://forms.gle/Hyq31yKvBitG74ESA"},{"type":"text","text":"\n\n確認\n"},{"type":"link","url":"https://docs.google.com/spreadsheets/d/1xJt6RNuA4o_DG_ebAuKTBZp9sZZ_usg6WtAM0I5sUYs/edit?usp=sharing"}]}]}]}]

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

    // console.log(JSON.stringify(this.state.messageData).toString());

    // const messages: any[] = jsons
    const messages: any[] = this.state.messageData  // NOTE: 本番はこれ

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
            messageData={messages}
            channelName={this.state.targetChannel}
          />
        </div>
      </main>
    )
  }
}