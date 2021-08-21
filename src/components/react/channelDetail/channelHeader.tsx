import { Component, FormEventHandler, MouseEventHandler } from "react";
import styles from "../../../styles/layout/channelView/channelHeader.module.scss"

interface Props {
    channelName: string,
    onSort: Function,
    onSearch: Function
}

export default class ChannelHeader extends Component<Props> {

    private searchBox: HTMLElement = null
    private inputArea: HTMLInputElement = null
    private isShowingSearchBox: boolean = false

    private showSearchBox(): void {
        if(this.searchBox == null) return
        if(!(this.searchBox.classList.contains(styles.hide))) {
            this.searchBox.classList.add(styles.hide)
        }
        this.isShowingSearchBox = true
    }

    private hideSearchBox(): void {
        if(this.searchBox == null) return
        if(this.searchBox.classList.contains(styles.hide)){
            this.searchBox.classList.remove(styles.hide)
        }
        this.isShowingSearchBox = false
        this.inputArea.value = ""
        this.onChangeInput(null)
    }

    /**
     * 検索ボタン押したとき
     */
    private onClickSearch: MouseEventHandler = (e: any = null) => {
        if(e && e.cancelable) e.preventDefault()
        this.isShowingSearchBox ? this.hideSearchBox() : this.showSearchBox()
    }

    private onChangeInput: FormEventHandler = (e: any = null) => {
        if(e && e.cancelable) e.preventDefault()
        this.props.onSearch(this.inputArea.value)
    }

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
                            <a href="#" onClick={this.onClickSearch}></a>
                        </p>
                    </div>

                </div>
                {/* 検索ボックス onBlur nullで隠れる */}
                <div className={`${styles.searchbox} ${styles.hide}`} ref={node => this.searchBox = node}>
                    <input name="search" type="text" placeholder="keyword" onChange={this.onChangeInput} ref={node => this.inputArea = node} />
                </div>
            </>
        )
    }

}