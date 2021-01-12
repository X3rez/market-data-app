import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from "../components/Form";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <Form />
        
      </main>
    </div>
  )
}
