import { Fragment, ReactElement } from "react";
import { Component } from "react";
import { MessageElement } from "../../../../config/interfaces";
import styles from "../../../../../styles/layout/channelView/message.module.scss"

interface Props {
  messageArray: MessageElement[]
}

export default class MessageBody extends Component<Props> {

  render(): ReactElement {
    const messageArray: MessageElement[] = this.props.messageArray

    return (
      // メッセージボディ
      <p className={styles.message}>
        {messageArray.map((el, key) => {
          return (
            <Fragment key={key}>
              {el.type == "channel" && el.channel_id}
              {el.type == "text" &&
                <span className={styles.message__text}>
                  {el.text.split("\n").map((t: string, k: number) => {
                    return (
                      <Fragment key={k}>
                        <span className={styles.message__text__break}>
                          {t}
                        </span>
                      </Fragment>
                    )
                  })}
                </span>
              }
              {el.type == "link" &&
                <a href={el.url}>{el.url}</a>
              }
            </Fragment>
          )
        })}
      </p>
    )

  }

}