import fs from 'fs'

export const getJson = async (dirPath) => {
  const paths = fs.readFileSync(dirPath, (err, data) => {
    if(data) {
      console.log(data)
    }else {
      console.log(err);
    }
  })

  const json = JSON.parse(paths.toString())

  return json
}