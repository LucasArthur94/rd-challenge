import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.content}>
      <h1>
        Welcome to SpaceX Launches Website
      </h1>
      <div className={styles.wrapper}>
        <Link href='/launches/upcoming'>Upcoming Launches</Link>
        <Link href='/launches/next'>Next Launch</Link>
        <Link href='/launches/past'>Past Launches</Link>
        <Link href='/launches/last'>Last Launch</Link>
      </div>
    </div>
  )
}

export default Home
