import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Bar from '../components/appBar'

export default function Home():JSX.Element {
  return (
    <div >
      <Head>
        <title>Favorites - MyMarket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <header>
        <Bar title="Home" to="/"/> 
      </header> 
      <main className={styles.container}>
        
        <h2>this is the favorites</h2>

      </main>
    </div>
  )
}
