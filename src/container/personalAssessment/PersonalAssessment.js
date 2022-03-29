import React from 'react'
import styles from "./PersonalAssessment.module.css"
import image from "../../assets/custom-plan.webp"
import BlueButton from '../../component/BlueButton/BlueButton'

export default function PersonalAssessment() {
  return (
    <>
    <div className={styles.box}>
        <section className={styles.imageBox}>
            <img src={image} alt="Custom Plan" className={styles.image}  />
        </section>
        <section className={styles.textBox}>
            <h2 className={styles.heading}>
                Food, movement, habits, sleep, mindset and of course from where you come — it all matters when it comes to manage weight
            </h2>
            <h3 className={styles.description}>
                Tell us about you. We’ll guide you toward your goals.
            </h3>
            <span>
                <BlueButton body='Take personal assessment' color="#4C3164" textcolor="white"/>
            </span>
        </section>
    </div>
    
    </>
  )
}
