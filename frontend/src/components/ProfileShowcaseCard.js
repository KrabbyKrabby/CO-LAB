import React from 'react'
import styles from '../components/CSS/ProfileShowcaseCard.module.css'

const ProfileShowcaseCard = () => {
  return (
    <div className={styles.ProfileShowcaseCard}>
      <div className={styles.ShowCardContent}>
            <h2>01</h2>
            <h3>Showcase your skills</h3>
            <p>
            hoihjfoiweigewgr
            </p>
        </div>

        <div className={styles.ShowCardContent}>
            <h2>02</h2>
            <h3>Showcase your projects</h3>
            <p>
            hoihjfoiweigewgr
            </p>
        </div>

        <div className={styles.ShowCardContent}>
            <h2>03</h2>
            <h3>Write intersting blogs</h3>
            <p>
            hoihjfoiweigewgr
            </p>
        </div>
      
    </div>
  )
}

export default ProfileShowcaseCard
