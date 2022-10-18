import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Launch } from '../../components/launch'
import { useLaunches } from '../../hooks/launches'
import styles from '../../styles/Listing.module.css'

const Last: NextPage = () => {
  const { lastLaunch, getLastLaunch } = useLaunches()
  
  useEffect(() => {
    getLastLaunch()
  }, [getLastLaunch])
  
  return (
    <div className={styles.container}>
      <Launch launch={lastLaunch} />
    </div>
  )
}

export default Last
