import fs from 'fs'

export const getJson = async (dirPath: string): Promise<JSON> => {
  const paths: any = await fs.readFile(dirPath, "utf-8", (data: any)=>data)
  const json = JSON.parse(paths.toString())

  return json
}


export const parseJSONFromFiles = async (_files: any): Promise<any> => {
  const messageTasks: any = []

  // ファイルの名前が 2XXX から始まるものだけに限定する
  const isMsgJSON: RegExp = /^2[0-9].{3}/
  _files = [..._files].filter((data: any) => data.name.search(isMsgJSON) >= 0)

  for(let i = 0; i < _files.length; i++) {

    messageTasks.push(new Promise<any>((res, rej) => {

      const reader = new FileReader()
      reader.onload = (event: any) => {
        const msgs = JSON.parse(event.target.result);

        // channelName無いので無理やり追加
        const path: string = _files[i].webkitRelativePath
        // ファイル名を取り除く
        let channelName = path.replace(/\/[^\/]+$/, "")
        // 親ディレクトリ名あれば取り除く
        channelName = channelName.replace(/.*\//, "")

        for(const i in msgs) {
          msgs[i]["channel"] = channelName
        }

        console.log(channelName);

        res(msgs)
      }

      reader.readAsText(_files[i])

    }))
  }

  const files = await Promise.all(messageTasks)
  return files

}