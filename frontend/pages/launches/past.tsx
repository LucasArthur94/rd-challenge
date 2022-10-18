import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Launch } from '../../components/launch'
import { useLaunches } from '../../hooks/launches'
import styles from '../../styles/Listing.module.css'

const Past: NextPage = () => {
  const { pastLaunches, getPastLaunches } = useLaunches()
  
  useEffect(() => {
    getPastLaunches()
  }, [getPastLaunches])
  
  return (
    <div className={styles.container}>
      { pastLaunches.map((launch, index) => <Launch key={index} launch={launch} />) }
    </div>
  )
}

export default Past
