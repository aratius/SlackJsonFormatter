import React from 'react'
import SlackView from '../components/react/slackView'
import { getJson } from '../components/utils/file'

interface Props {
  channelsData: any
}

export default class Top extends React.Component<Props> {

  render() {
    return (
      <>
        <SlackView />
      </>
    )
  }
}
