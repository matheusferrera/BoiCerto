import Head from 'next/head'
import Image from 'next/image'
import BarraPesquisa from '../components/BarraPesquisa'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <BarraPesquisa></BarraPesquisa>
      </div>
    </div>
  )
}
