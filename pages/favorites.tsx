import Head from 'next/head'
import styles from '../styles/favorites.module.css'
import Bar from '../components/appBar'
import Favorite from "../components/Favorite";

export default function Favorites() {
  let lSData = typeof window !== 'undefined' ? localStorage.getItem("favorites"): null
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
            {!lSData && <h1>You are no have favorites</h1>}
            {lSData && JSON.parse(lSData).map(el => <Favorite fav={el}/>)}
      </main>
    </div>
  )
}
