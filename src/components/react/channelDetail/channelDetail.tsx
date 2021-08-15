import { Component, Fragment } from "react";
import { Message } from "../../config/interfaces";
import ChannelHeader from "./channelHeader";
import MessageRouter from "./message/messageRouter";
import styles from "../../../styles/layout/channelView/channelDetail.module.scss"

interface Props {
    messageData: Message[],
    channelName: string,
}

export default class ChannelDetail extends Component<Props> {

    /**
     * 並べ替え
     */
    private onSort = (sortType: string): void => {

    }

    /**
     * 文字検索
     */
    private onSearch = (text: string): void => {

    }

    render() {
        const messageData = this.props.messageData

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
                    <ul>
                        {
                            messageData &&
                            // messageData.length > 0 &&
                            messageData.map((data: any, key: any) => {
                                return(
                                    <Fragment key={key}>
                                        <MessageRouter
                                            data={data}
                                        />
                                    </Fragment>
                                )
                            })
                        }
                    </ul>
                </article>
            </section>
        )
    }

}