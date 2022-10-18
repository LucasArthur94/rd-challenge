import { FC } from 'react'
import Image from 'next/image'
import styles from '../styles/Launch.module.css'
import { LaunchInterface } from '../types/launch-interface'

type LaunchType = {
  launch?: LaunchInterface
}

export const Launch: FC<LaunchType> = ({ launch }) => {
  return (
    <div className={styles.container}>
      {launch?.links.patch.small && (
        <Image
          src={launch.links.patch.small}
          width='300px'
          height='300px'
          alt={launch.name}
        />
      )}
      <h3>{launch?.name}</h3>
    </div>
  )
}
