import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Spotify 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>This is spotify</h1>
      <main>
        <Sidebar/>
        {/* center*/}

        <div> {/* player */}</div>
      </main>
    </div>
  )
}
