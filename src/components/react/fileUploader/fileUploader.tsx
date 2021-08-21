import { Component } from "react";
import { parseJSONFromFiles } from "../../utils/file";
import styles from "../../../styles/layout/sideBar/fileUploader.module.scss"

interface Props {
    onChooseFile: Function
}

class DropState {
    static onDragOver: string = "ondragover"
    static onDragLeave: string = "ondragleave"
    static onDrop: string = "ondrop"
}

export default class FileUploader extends Component<Props> {

    dropArea: HTMLElement
    chooseDir: any
    chooseFile: any

    private onReadyDropArea = (node: HTMLElement) => {
        if(node == null) return
        this.dropArea = node
    }

    private onDragOver = (e: any) => {
        this.addClassNameOnDropArea(e, DropState.onDragOver)
    }

    private onDragLeave = (e: any) => {
        this.addClassNameOnDropArea(e, DropState.onDragLeave)
    }


    /**
     *
     */
    private addClassNameOnDropArea(e: any, name: string) {
        if(e) {
            e.stopPropagation()
            e.preventDefault()
        }
        if(this.dropArea == null) return
        if(name == DropState.onDragOver) {
            if(!(this.dropArea.classList.contains(styles.onDragOver))) {
                this.dropArea.classList.add(styles.onDragOver)
            }
        }else if(name == DropState.onDragLeave) {
            if(this.dropArea.classList.contains(styles.onDragOver)) {
                this.dropArea.classList.remove(styles.onDragOver)
            }
        }
    }

    /**
     * ファイルドロップ
     * ディレクトリには非対応
     */
     private onDrop = async (e: any) => {
        if(e) {
            e.stopPropagation()
            e.preventDefault()
        }
        const files = await parseJSONFromFiles(e.dataTransfer.files)

    }

    /**
     * ファイル選択
     */
    private handleReadFile = async (e: any) => {
        console.log(e);
        const files = await parseJSONFromFiles(e.target.files)
        // 正規表現でぱいすの相対パスのスラッシュイカを削除してむりやりチャンネル名取得

        this.submitMessages(files)
    }

    /**
     * ファイル配列からメッセージイベントを上に伝播させる
     */
    private submitMessages(files: any): void {
        const messages: any = []
        for(const i in files) {
          const file: any = files[i]
          for(const j in file) {
            messages.push(file[j])
          }
        }
        this.props.onChooseFile(messages)
    }

    private upload = (): void => {
        this.chooseDir.click()
    }

    render() {
        return (
            <div className={styles.container} ref={this.onReadyDropArea} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop}>
                <input
                    type="file"
                    name="hello"
                    /* @ts-expect-error */  // エラーを強制的に黙らせる https://qiita.com/minorin22/items/0a8354a81039ea3700a2
                    webkitdirectory=""
                    directory=""
                    multiple
                    onChange={this.handleReadFile}
                    ref={node => this.chooseDir = node}
                />
                {/* ファイル選択 */}
                <input
                    type="file"
                    name="hello"
                    multiple
                    onChange={this.handleReadFile}
                    ref={node => this.chooseFile = node}
                />

                <p className={styles.upload}>
                    <a href="#" onClick={this.upload}>Upload</a>
                </p>
            </div>
        )
    }

}