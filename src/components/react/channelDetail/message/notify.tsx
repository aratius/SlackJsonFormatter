import { ReactElement } from "react";
import { Component } from "react";

interface Props {
  data: any,
}

/**
 * メッセージじゃなくて、チャンネル入室とかの通知系のとき
 */
export default class Notify extends Component<Props> {

  render(): ReactElement {
    const data = this.props.data

    return(
      <></>
      // <>{data.text}</>
    )
  }

}