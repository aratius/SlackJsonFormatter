import { Component } from "react";
import styles from "../../../styles/layout/channelView/channelHeader.module.scss"

interface Props {
    channelName: string,
    onSort: Function,
    onSearch: Function
}

export default class ChannelHeader extends Component<Props> {

    render() {
        return (
            <div className={styles.container}>
                <h3 className={styles.channelName}>#channel_test</h3>
                <div className={styles.detailedSearch}>
                    <p className={styles.detailedSearch__sort}>
                        <a href="#"></a>
                    </p>
                    <p className={styles.detailedSearch__search}>
                        <a href="#"></a>
                    </p>
                </div>
            </div>
        )
    }

}