export interface MessageElement {
  type: "link" | "text" | "channel",
  text?: string,
  url?: string,
  channel_id?: string,
  [extraProps: string]: any; // これでどんな属性も受け取れるようになる。
}

export interface Blocks {
  elements?: Array<{
    elements?: MessageElement[]
  }>,
  [extraProps: string]: any; // これでどんな属性も受け取れるようになる。
}

export  interface File {
  permalink: string,
  title: string
}

export interface Props {
  msg: {
    text: string,
    ts: string,
    user_profile?: {
      display_name: string,
      image_72: string
    },
    user: string
    blocks: Blocks[]
    files?: File[]
  }
  [extraProps: string]: any; // これでどんな属性も受け取れるようになる。
}
