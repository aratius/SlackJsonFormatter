import Head from 'next/head'
import React from 'react'
import SlackView from '../components/react/slackView'

interface Props {
  channelsData: any
}

export default class Top extends React.Component<Props> {

  render() {
    return (
      <>
        <Head>
          <title>Slack JSON Formatter</title>
          <meta property="og:url" content="https://slack-json-formatter.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Slack JSON Formatter" />
          <meta property="og:description" content="JSON Formatter for slack app. " />
          <meta property="og:site_name" content="Slack JSON Formatter" />
          {/* <meta property="og:image" key="ogImage" content="https://slack-json-formatter.vercel.app/images/og.png" /> */}
          <meta name="twitter:card" key="twitterCard" content="summary_large_image" />
          <meta name="twitter:site" content="@aualrxse" />
          <link rel="icon" href="https://slack-json-formatter.vercel.app/favicons/favicon.ico"></link>
        </Head>
        <SlackView />
      </>
    )
  }
}
