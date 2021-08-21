import { Component, ReactElement } from "react";
import Message from "./message";
import Notify from "./notify";

interface Props {
  data: any,
}

export default class MessageRouter extends Component<Props> {

  render(): ReactElement {
    const data = this.props.data

    const messageTypes = {
      message: (msg: any): boolean => "blocks" in msg,
      notify: (msg: any): boolean => !("blocks" in msg)
    }

    if(messageTypes.message(data))
      // 普通のメッセージのとき
      return <Message data={data} />
    else if (messageTypes.notify(data))
      // 通知系のとき
      return <Notify data={data} />


    return(<></>)
  }

}
