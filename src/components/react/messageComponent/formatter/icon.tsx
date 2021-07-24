import { Component, ReactElement } from "react";

interface Props {
  url: string,
  alt?: string,
  name: string,
  time: string
}

export default class Icon extends Component<Props> {

  render(): ReactElement {
    const icon_url = this.props.url
    const icon_alt = this.props.alt
    const name = this.props.name
    const time = this.props.time

    return (
      <>
        {/* アイコン */}
        <h2>
          <img src={icon_url} alt={icon_alt} />
        </h2>

        {/* 名前と時間のhead */}
        <div>
          <p>{name}</p>
          <p>{time}</p>
        </div>
      </>
    )
  }

}