import '../styles/global.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from  '../components/react/layout'
import { Component } from 'react'

export default function App({ Component, pageProps }: any) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}