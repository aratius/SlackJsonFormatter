import React from 'react'
import { getMessageArray } from '../../utils/messageArray';
import { getTime } from '../../utils/timeFormatter';
import Files from './files';
import User from './icon';
import MessageBody from './messageBody';

export interface MessageElement {
  type: "link" | "text" | "channel",
  text?: string,
  url?: string,
  channel_id?: string,
  [extraProps: string]: any; // これでどんな属性も受け取れるようになる。
}

export interface Blocks {
  elements?: Array<{
    elements?: MessageElement[]
  }>,
  [extraProps: string]: any; // これでどんな属性も受け取れるようになる。
}

export  interface File {
  permalink: string,
  title: string
}

export interface Props {
  msg: {
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
    const data = this.props.msg
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
      <section>
        {/* ユーザー情報 */}
        <User
          url={icon_url}
          alt="[dummy]hoge"
          name={name}
          time={time}
        />

        {/* メッセージボディ */}
        <MessageBody
          messageArray={messageArray}
        />

        {/* 添付ファイル */}
        <Files files={files} />

      </section>
    )
  }

}