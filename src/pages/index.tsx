import React from 'react'
import SlackView from '../components/react/slackView'

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
