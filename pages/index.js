/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'

import Main from '../components/main/main'

export default function Home() {
  return (
    <div>
      <Head>
       <title>Markdown Editor</title>
      </Head>
      <main>
        <Main />
      </main>
    </div>
  )
}
