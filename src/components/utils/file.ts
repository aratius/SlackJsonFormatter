// import fs from 'fs'
const fs = process.browser ? undefined : require("fs")

export const getJson = async (dirPath: string): Promise<JSON> => {
  const paths: any = await fs.readFile(dirPath, "utf-8", (data: any)=>data)
  const json = JSON.parse(paths.toString())

  return json
}


export const parseJSONFromFiles = async (_files: any): Promise<any> => {
  const messageTasks: any = []

  for(let i = 0; i < _files.length; i++) {

    messageTasks.push(new Promise<any>((res, rej) => {

      const reader = new FileReader()
      reader.onload = (event: any) => {
        const msgs = JSON.parse(event.target.result);

        res(msgs)
      }

      reader.readAsText(_files[i])

    }))
  }

  const files = await Promise.all(messageTasks)
  return files

}