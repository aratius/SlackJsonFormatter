import { Component } from "react";
import styles from "../../../styles/layout/sideBar/channelList.module.scss"

interface Props {
    channelNames: string[]
    onChooseChannel: Function
}

/**
 * チャンネル一覧
 */
export default class ChannelList extends Component<Props> {

    render() {
        return (
            <div className={styles.container}>
                <h3 className={styles.title}>Channels</h3>
                <ul className={styles.channelList}>
                    <li>#test_channel</li>
                    <li>#test_channel</li>
                    <li>#test_channel</li>
                    <li>#test_channel</li>
                </ul>
            </div>
        )
    }

}