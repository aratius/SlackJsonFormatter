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
            <>
                <div className={styles.container}>
                    <h3 className={styles.channelName}>#channel_test</h3>
                    <div className={styles.detailedSearch}>
                        <p className={styles.detailedSearch__sort}>
                            <select name="sort" id="">
                                <option value="date">date</option>
                                <option value="person">person</option>
                            </select>
                        </p>
                        <p className={styles.detailedSearch__search}>
                            <a href="#"></a>
                        </p>
                    </div>

                </div>
                {/* 検索ボックス onBlur nullで隠れる */}
                <div className={styles.searchbox}>
                    <input name="search" type="text" placeholder="keyword" />
                </div>
            </>
        )
    }

}