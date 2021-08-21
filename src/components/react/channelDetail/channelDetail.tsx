import { Component, Fragment } from "react";
import { Message } from "../../config/interfaces";
import ChannelHeader from "./channelHeader";
import MessageRouter from "./message/messageRouter";
import styles from "../../../styles/layout/channelView/channelDetail.module.scss"
import { getDate } from "../../utils/timeFormatter";

interface Props {
    messageData: Message[],
    channelName: string,
}


export default class ChannelDetail extends Component<Props> {

    state: {
        searchText: string
    }

    constructor(props: Props) {
        super(props)
        this.state = {
            searchText: ""
        }
    }

    /**
     * 並べ替え
     */
    private onSort = (sortType: string): void => {

    }

    /**
     * 文字検索
     */
    private onSearch = (text: string): void => {
        this.setState({
            ...this.state,
            searchText: text
        })
    }

    render() {
        let messageData = this.props.messageData
        // 検索文字列でフィルタ
        messageData = messageData.filter((data) => {
            return data.text.indexOf(this.state.searchText) >= 0
        })

        let lastLoopDate = ""

        return (
            <section className={styles.container}>

                <div className={styles.header}>
                    {/* チャンネル名前と絞り込みなど */}
                    <ChannelHeader
                        channelName={this.props.channelName}
                        onSort={this.onSort}
                        onSearch={this.onSearch}
                    />
                </div>
                <article className={styles.contents}>
                    {
                        messageData &&
                        messageData.map((data: any, key: any) => {
                            const date = getDate(data.ts)
                            let acrossDate: boolean = date != lastLoopDate
                            lastLoopDate = date
                            return(
                                <Fragment key={key}>
                                    {acrossDate && <span className={styles.date}>{date}</span>}
                                    <MessageRouter
                                        data={data}
                                    />
                                </Fragment>
                            )
                        })
                    }
                </article>
            </section>
        )
    }

}