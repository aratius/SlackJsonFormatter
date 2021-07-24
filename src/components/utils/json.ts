import fs from 'fs'

export const getJson = async (dirPath: string): Promise<JSON> => {
  const paths: any = await fs.readFile(dirPath, "utf-8", (data)=>data)

  console.log(paths);

  const json = JSON.parse(paths.toString())

  return json
}
