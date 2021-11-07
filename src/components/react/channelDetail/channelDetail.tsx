import { Component, Fragment } from "react";
import { Message } from "../../config/interfaces";
import ChannelHeader from "./channelHeader";
import MessageRouter from "./message/messageRouter";
import styles from "../../../styles/layout/channelView/channelDetail.module.scss"
import { getDate } from "../../utils/timeFormatter";
import gsap from "gsap"
const ScrollToPlugin = process.browser ? require("gsap/ScrollToPlugin") : undefined
process.browser && gsap.registerPlugin(ScrollToPlugin)
interface Props {
    messageData: Message[],
    channelName: string,
}


export default class ChannelDetail extends Component<Props> {

    private contents: HTMLElement = null
    private scrollTween: GSAPTween = null
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

    public scrollTop(): void {
        if(this.contents != null) {
            if(this.scrollTween != null) this.scrollTween.kill()
            this.scrollTween = gsap.to(this.contents, {scrollTo: {y: 0}, duration: 0.5})
        }
    }

    render() {
        let messageData = this.props.messageData
        // 検索文字列でフィルタ
        messageData = messageData.filter((data) => {
            try {
                const reg: RegExp = new RegExp(this.state.searchText, "i")

                return data.text.match(reg) != null
            } catch(err) {
                return false
            }
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
                <article className={styles.contents} ref={node => this.contents = node}>
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