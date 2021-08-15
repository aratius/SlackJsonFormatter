import { Component, Fragment } from "react";
import { Message } from "../../config/interfaces";
import MessageRouter from "./message/messageRouter";

interface Props {
    messageData: Message[]
}

export default class channelDetail extends Component<Props> {

    render() {
        const messageData = this.props.messageData

        return (
            <>
                <ul>
                    {messageData &&
                    // messageData.length > 0 &&
                    messageData.map((data: any, key: any) => {
                    return(
                        <Fragment key={key}>
                        <MessageRouter
                            data={data}
                        />
                        </Fragment>
                    )
                    })
                    }
                </ul>
            </>
        )
    }

}