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
                    <li className={styles.channelList__item}>
                        <span>#test_channeltest_channeltest_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                    <li className={styles.channelList__item}>
                        <span>#test_channel</span>
                        <a href="#" className={styles.channelList__item__delete}></a>
                    </li>
                </ul>
            </div>
        )
    }

}