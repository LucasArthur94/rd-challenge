import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Launch } from '../../components/launch'
import { useLaunches } from '../../hooks/launches'
import styles from '../../styles/Listing.module.css'

const Upcoming: NextPage = () => {
  const { upcomingLaunches, getUpcomingLaunches } = useLaunches()
  
  useEffect(() => {
    getUpcomingLaunches()
  }, [getUpcomingLaunches])
  
  return (
    <div className={styles.container}>
      { upcomingLaunches.map((launch, index) => <Launch key={index} launch={launch} />) }
    </div>
  )
}

export default Upcoming
