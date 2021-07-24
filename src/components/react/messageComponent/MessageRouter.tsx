import { Component, ReactElement } from "react";
import Message from "./message";
import Notify from "./notify";

interface Props {
  msg: any
}

export default class MessageRouter extends Component<Props> {

  render(): ReactElement {
    const msg = this.props.msg

    const messageTypes = {
      message: (msg: any): boolean => "blocks" in msg,
      notify: (msg: any): boolean => !("blocks" in msg)
    }

    if(messageTypes.message(msg)) {
      // 普通のメッセージのとき

      return <Message msg={msg} />
    } else if (messageTypes.notify(msg)) {
      // 通知系のとき

      return <Notify />
    }

    return(<></>)
  }

}
