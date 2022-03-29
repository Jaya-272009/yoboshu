import React from 'react'
import BlueButton from '../../component/BlueButton/BlueButton'
import styles from "./Intro.module.css"
import video from "../../assets/diet-plan.mp4"

export default function Introduction() {
  return (
    <>
    <div className={styles.mainBlock}>
        <section className={styles.blockText}>
            <h1 className={styles.mainHeading}>Say goodbye to strict dieting. Behavioural Psychology is the key to long lasting change</h1>
            <h3 className={styles.subHeading}>Start your weight loss journey with our most holistic weight loss approach</h3>
            <span>
                <BlueButton body='Take personal assessment' color="#1E97CA" textcolor="white"/>
                <BlueButton body='Join now' color="white" textcolor="#1E97CA"/>
            </span>
        </section>
        <section className={styles.blockVideo}>
            <video src={video} className={styles.videoPlayer} autoPlay></video>
        </section>
    </div>
    
    </>
  )
}
