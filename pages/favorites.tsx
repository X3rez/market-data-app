import Head from 'next/head'
import styles from '../styles/favorites.module.css'
import Bar from '../components/appBar'
import Favorite from "../components/Favorite";
import checkout from '../untils/checkout'


export default function Favorites():JSX.Element {
  let lSData = checkout(localStorage.getItem("favorites"))
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
