import { Fragment, ReactElement } from "react";
import { Component } from "react";
import { MessageElement } from "../../../config/interfaces";

interface Props {
  messageArray: MessageElement[]
}

export default class MessageBody extends Component<Props> {

  render(): ReactElement {
    const messageArray: MessageElement[] = this.props.messageArray

    return (
      // メッセージボディ
      <p>
        {messageArray.map((el, key) => {
          return (
            <Fragment key={key}>
              {el.type == "channel" && el.channel_id}
              {el.type == "text" &&
                <span>
                  {el.text.split("\n").map((t: string, k: number) => {
                    return (
                      <Fragment key={k}>
                        {t}
                        <br/>
                      </Fragment>
                    )
                  })}
                </span>
              }
              {el.type == "link" &&
                <a href={el.url}>{el.url}</a>
              }
              <br/>
            </Fragment>
          )
        })}
      </p>
    )

  }

}