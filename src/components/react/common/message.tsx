import React from 'react'
import { getTime } from '../../utils/timeFormatter';

export interface MessageData {
  messageData: {
    text: string,
    ts: string,
    user_profile?: {
      display_name: string,
      image_72: string
    },
    user: string
    blocks: Array<{
      elements: Array<{
        elements: Array<{
          type: string,
          text?: string,
          url?: string,
          channel_id?: string
        }>
      }>
    }>,
    files?: Array<{
      permalink: string,
      title: string
    }>
  }
  [extraProps: string]: any; // これでどんな属性も受け取れるようになる。
}

/**
 * 一つのメッセージ
 */
export default class Message extends React.Component<MessageData> {

  render() {
    // メッセージ一つに詰まってる情報すべて
    const data = this.props.messageData
    console.log(data);

    const name = data.user_profile ? data.user_profile.display_name : data.user

    // フォーマットした時間
    const time = getTime(data.ts)

    // iconのURL ない場合はダミーをはめる
    const icon_url = data.user_profile ? data.user_profile.image_72 : "https://placehold.jp/100x100.png"

    const files = data.files

    return (
      <section>
        {/* アイコン */}
        <h2>
          <img src={icon_url} alt="" />
        </h2>

        <div>
          {/* 名前と時間のhead */}
          <div>
            <p>{name}</p>
            <p>{time}</p>
          </div>

          {/* メッセージボディ */}
          <p>
            {data.blocks.map((block, key1) => {
              return (
                <React.Fragment key={key1}>
                  {block.elements.map((element, key2)=> {
                    return (
                      <React.Fragment key={key2}>
                        {element.elements.map((el, key3) => {
                          return (
                            <React.Fragment key={key3}>
                              {el.type == "channel" && el.channel_id}
                              {el.type == "text" &&
                                <span>
                                  {el.text.split("\n").map((t, key4) => {
                                    return (
                                      <React.Fragment key={key4}>
                                        {t}
                                        <br/>
                                      </React.Fragment>
                                    )
                                  })}
                                  </span>
                              }
                              {el.type == "link" &&
                                <a href={el.url}>{el.url}</a>
                              }
                              <br/>
                            </React.Fragment>
                          )
                        })}
                      </React.Fragment>
                    )
                  })}
                </React.Fragment>
              )
            })}
          </p>

          <ul>
            {files && files.length && files.map((file, key) => {
              return (
                <li key={key}>
                  <a href={file.permalink} target="_blank">{file.title}</a>
                </li>
              )
            })}
          </ul>
        </div>

      </section>
    )
  }

}