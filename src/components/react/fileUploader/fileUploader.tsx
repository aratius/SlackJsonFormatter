import { Component } from "react";
import { getFiles } from "../../utils/file";

interface Props {
    onChooseFile: Function
}

export default class FileUploader extends Component<Props> {

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

    render() {
        return (
            <>
                <input
                    type="file"
                    name="hello"
                    /* @ts-expect-error */  // エラーを強制的に黙らせる https://qiita.com/minorin22/items/0a8354a81039ea3700a2
                    webkitdirectory=""
                    directory=""
                    multiple
                    onChange={this.handleReadFile}
                />
                {/* ファイル選択 */}
                <input
                    type="file"
                    name="hello"
                    multiple
                    onChange={this.handleReadFile}
                />
            </>
        )
    }

}