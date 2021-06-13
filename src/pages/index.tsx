import React from 'react'
import SlackView from '../components/react/slackView'
import { getJson } from '../components/utils/jsonGetter'

interface Props {
  res: JSON  // TODO: 後で変える
}

export default class Top extends React.Component<Props> {

  render() {

    return (
      <>
        <SlackView
          messages={this.props.res}
        />
      </>
    )
  }
}

export async function getStaticProps() {
  const res = await getJson("./public/json/2021-05-30.json")
  return {
    props: {
      res
    }
  }
}