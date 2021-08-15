import { Component } from "react";
import { getFiles } from "../../utils/file";
import styles from "../../../styles/layout/sideBar/fileUploader.module.scss"

interface Props {
    onChooseFile: Function
}

export default class FileUploader extends Component<Props> {

    chooseDir: any
    chooseFile: any

    /**
     * ファイル選択
     */
    private handleReadFile = async (e: any) => {
        const files = await getFiles(e)
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
        this.chooseFile.click()
    }

    render() {
        return (
            <div className={styles.container}>
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