import { Component, MouseEventHandler } from "react";
import styles from "../../../styles/layout/sideBar/channelList.module.scss"

interface Props {
    channelNames: string[]
    targetChannel: string
    onChooseChannel: Function
    onDeleteChannel: Function
}

/**
 * チャンネル一覧
 */
export default class ChannelList extends Component<Props> {

    render() {
        const channelNames = this.props.channelNames

        return (
            <div className={styles.container}>
                <h3 className={styles.title}>Channels</h3>
                <ul className={styles.channelList}>
                    {channelNames.map((data, key) => {
                        // 選択中クラスのスタイル
                        const activeStyles = data == this.props.targetChannel ? styles.selected : ""
                        return (
                            <li className={`${styles.channelList__item} ${activeStyles}`} key={key} onClick={(e: any) => this.props.onChooseChannel(e, data)}>
                                <span>#{data}</span>
                                <a href="#" className={styles.channelList__item__delete} onClick={(e: any) => this.props.onDeleteChannel(e, data)}></a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}