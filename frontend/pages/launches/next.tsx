import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Launch } from '../../components/launch'
import { useLaunches } from '../../hooks/launches'
import styles from '../../styles/Listing.module.css'

const Next: NextPage = () => {
  const { nextLaunch, getNextLaunch } = useLaunches()
  
  useEffect(() => {
    getNextLaunch()
  }, [getNextLaunch])
  
  return (
    <div className={styles.container}>
      <Launch launch={nextLaunch} />
    </div>
  )
}

export default Next
