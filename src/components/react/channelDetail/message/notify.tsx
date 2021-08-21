import { ReactElement } from "react";
import { Component } from "react";
import styles from "../../../../styles/layout/channelView/message.module.scss"

interface Props {
  data: any,
}

/**
 * メッセージじゃなくて、チャンネル入室とかの通知系のとき
 */
export default class Notify extends Component<Props> {

  render(): ReactElement {
    const data = this.props.data

    return(
      <article className={styles.container}>
        <p className={styles.notifier}>{data.text}</p>
      </article>
    )
  }

}