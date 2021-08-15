import { Component, ReactElement } from "react";
import styles from "../../../../../styles/layout/channelView/message.module.scss"

interface Props {
  name: string,
  time: string
}

export default class Author extends Component<Props> {

  render(): ReactElement {
    const name = this.props.name ? this.props.name : "undefined"
    const time = this.props.time

    return (
      <div className={styles.author}>
        {/* 名前と時間のhead */}
        <p className={styles.author__name}>{name}</p>
        <p className={styles.author__time}>{time}</p>
      </div>
    )
  }

}