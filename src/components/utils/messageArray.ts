import { Blocks, MessageElement } from "../config/interfaces"

export const getMessageArray = (blocks: Blocks[]): MessageElement[] => {
  // 返す値
  const messageArray: MessageElement[] = []
  for(const i in blocks){
    const block = blocks[i]
    if(!("elements" in block)) return null
    for(const j in block.elements) {
      const el1 = block.elements[j]
      if(!("elements" in el1)) return null
      for(const k in el1.elements) {
        const el = el1.elements[k]
        messageArray.push({
          type: el.type,
          text: el.text
        })
      }
    }
  }

  return messageArray
}