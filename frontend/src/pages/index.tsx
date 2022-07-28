import type { NextPage } from 'next'
import Head from 'next/head'
import { Suspense } from 'react'
import { useQuery } from 'urql'

const itemsQuery = `
  query {
    items {
      id
      name
    }
  }
`

const Home: NextPage = () => {
  const [result] = useQuery({
    query: itemsQuery,
  })

  const { data } = result

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>GB News front</h1>

      <Suspense fallback={<p>hogehgoeg</p>}>
        <ul>
          {data.items.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  )
}

export default Home
