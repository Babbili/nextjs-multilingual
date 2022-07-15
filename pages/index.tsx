//import NexPage type from Next
import type { NextPage } from 'next'
//import GetServerSideProps type from Next
import { GetServerSideProps } from 'next'
import Head from 'next/head'
// import Mongodb clientPromise
import clientPromise from '../utils/dbConnect'
import { useAppContext } from '../context/AppContext'
import styles from '../styles/Home.module.css'
import { tType } from '../types'

const Home: NextPage<{ data: tType}> = ({ data }) => {

  // import t from app context
  const t = useAppContext()

  console.log('article', data.article)

  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS Internationalized Routing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>{ data.article }</p>
      </main>

    </div>
  )
}
export default Home


// Using GetServerSideProps method from NextJs to fetch app data from MongoDB
// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export const getServerSideProps: GetServerSideProps = async (context) => {
  // import current locale from context parameter
  // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#context-parameter
  const locale = context.locale || 'en'

  // await MongoDB clientPromis
  const client = await clientPromise
  const db = client.db('next') // call MongoDB database 'next' which has two collections 'en' and 'fr'
  // each collection has a document 'app_data' contains the data translated according to locale

  // set appData according to the current locale to be one of the 2 collections in database 'en' or 'fr'
  const appData = await db.collection(locale).find().toArray()
  const data = appData[0].app_data

  return {
    props: { data } // will be passed to the page component as a prop
  }
  
}
