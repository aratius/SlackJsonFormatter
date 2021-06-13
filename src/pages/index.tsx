import React from 'react'
import SlackView from '../components/react/slackView'
import { getJson } from '../components/utils/jsonGetter'

interface Props {
}

export default class Top extends React.Component<Props> {

  render() {

    return (
      <>
        <SlackView/>
      </>
    )
  }
}
