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
                <h3>Channels</h3>
                <ul>
                    <li>#test_channel</li>
                    <li>#test_channel</li>
                    <li>#test_channel</li>
                    <li>#test_channel</li>
                </ul>
            </div>
        )
    }

}