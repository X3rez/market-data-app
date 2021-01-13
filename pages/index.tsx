import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from "../components/Form";
import Bar from '../components/appBar'

export default function Home():JSX.Element {
  return (
    <div >
      <Head>
        <title>Welcome - MyMarket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <header>
        <Bar /> 
      </header> 
      <main className={styles.container}>
        
        <Form />

      </main>
    </div>
  )
}
