import React from 'react'
import SlackView from '../components/react/slackView'
import { getJson } from '../components/utils/jsonGetter'

interface Props {
  res: any  // TODO: 後で変える
}

export default class Top extends React.Component<Props> {

  render() {

    console.log(this.props.res);

    return (
      <>
        <SlackView />
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