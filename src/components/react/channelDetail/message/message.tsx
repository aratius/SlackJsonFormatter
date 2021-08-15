import React from 'react'
import { Blocks, File, MessageElement } from '../../../config/interfaces';
import { getMessageArray } from '../../../utils/messageArray';
import { getTime } from '../../../utils/timeFormatter';
import Files from './formatter/files';
import Author from './formatter/author';
import MessageBody from './formatter/messageBody';
import styles from "../../../../styles/layout/channelView/message.module.scss"

export interface Props {
  data: {
    text: string,
    ts: string,
    user_profile?: {
      display_name: string,
      image_72: string
    },
    user: string
    blocks: Blocks[]
    files?: File[]
  }
  [extraProps: string]: any; // これでどんな属性も受け取れるようになる。
}

/**
 * 一つのメッセージ
 * MessageBaseという形にして、Messageの形式によってコンポーネントを切り分ける
 */
export default class Message extends React.Component<Props> {

  render() {
    // メッセージ一つに詰まってる情報すべて
    const data = this.props.data
    if(!data) return (<></>)

    // 名前
    const name = data.user_profile ? data.user_profile.display_name : data.user
    // タイムスタンプをフォーマット
    const time = getTime(data.ts)
    // iconのURL ない場合はとりあえずダミーをはめる
    const icon_url = data.user_profile ? data.user_profile.image_72 : "https://placehold.jp/100x100.png"
    // ファイル配列
    const files = data.files
    // Message配列
    const messageArray: MessageElement[] = getMessageArray(data.blocks)

    return (
      <article className={styles.container}>
        <h2 className={styles.icon}>
          <img src={icon_url} alt="" />
        </h2>

        <div className={styles.contents}>

          {/* ユーザー情報 */}
          <Author
            name={name}
            time={time}
            />

          {/* メッセージボディ */}
          <MessageBody
            messageArray={messageArray}
            />

          {/* 添付ファイル */}
          <Files files={files} />
        </div>
      </article>
    )
  }

}