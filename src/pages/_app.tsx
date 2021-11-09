import '../styles/global.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from  '../components/react/layout'
import { useEffect } from 'react';
import router from "next/router"

export default function App({ Component, pageProps }: any) {

  useEffect((): void => {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      alert("SP非対応です。PCでご覧ください。")
    }
  })

  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}