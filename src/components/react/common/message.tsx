import React from 'react'
import { getTime } from '../../utils/timeFormatter';

interface Props {
  messageData: {
    text: string,
    ts: string,
    user_profile: {
      image_72: string
    },
    blocks: Array<{
      elements: Array<{
        elements: Array<{
          text: string,
          url: string
        }>
      }>
    }>
  }
}

/**
 * 一つのメッセージ
 */
export default class Message extends React.Component<Props> {

  render() {
    // メッセージ一つに詰まってる情報すべて
    const data = this.props.messageData
    console.log(data);

    // フォーマットした時間
    const time = getTime(data.ts)

    // iconのURL ない場合はダミーをはめる
    const icon_url = data.user_profile ? data.user_profile.image_72 : "https://placehold.jp/100x100.png"

    return (
      <section>
        {/* アイコン */}
        <h2>
          <img src={icon_url} alt="" />
        </h2>

        <div>
          {/* 名前と時間のhead */}
          <div>
            <p></p>
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
                              {el.text &&
                                <span>{el.text}</span>
                              }
                              {el.url &&
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
        </div>

      </section>
    )
  }

}