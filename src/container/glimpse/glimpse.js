import React from 'react'
import styles from "./glimpse.module.css"
import image from "../../assets/logo.webp";
import ContentButton from './ContentButton';

export default function Glimpse() {
  return (
    <>
    <div className={styles.mainBlock}>
        <section className={styles.blockText}>
            <h1 className={styles.mainHeading}>A glimpse of weight-loss course</h1>
            <section className={styles.imageBox}>
                <div className={styles.textSide}>
                    <h3 className={styles.subHeading}>Your personalized program will be created by our team of experts which will help you understand the science of eating better, making better food choice, exercise & activities, fullness, less stress, better sleep, and more. Here's a glimpse of some popular topics</h3>
                    <ContentButton body = 'The foundation of behavioral psychology in weight loss'/>
                    <ContentButton body = 'The science of portion control'/>
                    <ContentButton body = 'How to adopt mindful eating'/>
                    <ContentButton body = 'How to listen to your body needs'/>
                    <ContentButton body = 'How to use flavor and nutrition to feel full'/>
                    <ContentButton body = 'Physical movement without paying to gyms'/>
                    <ContentButton body = 'How to tame food triggers'/>
                    <ContentButton body = 'How to breathe to release stress & anxiety'/>
                    <ContentButton body = 'The relation between weight & sleep'/>
                    <ContentButton body = 'How to get deep sleep and wake up feeling energetic'/> 
                    <ContentButton body = 'and more ...' last/>       
                </div>
                <div  className={styles.imageSide}>
                    <img className={styles.image} src={image} alt="logo" />
                </div>
            </section>
        </section>
        
    </div>
    
    </>
  )
}
