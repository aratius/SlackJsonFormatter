import { ReactElement } from "react";
import { Component } from "react";
import { File } from "../message";

interface Props {
  files: File[]
}

export default class Files extends Component<Props> {

  render(): ReactElement {

    const files = this.props.files

    return (
      <ul>
        {files && files.length && files.map((file: any, key: number) => {
          return (
            <li key={key}>
              <a href={file.permalink} target="_blank">{file.title}</a>
            </li>
          )
        })}
      </ul>
    )
  }

}