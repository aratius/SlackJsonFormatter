import { ReactElement } from "react";
import { Component } from "react";

interface Props {
  data: any
}

export default class Notify extends Component<Props> {

  render(): ReactElement {
    const data = this.props.data

    return(
      <>{data.text}</>
    )
  }

}