import React from 'react'
import BlueButton from "../../component/BlueButton/BlueButton"
import classes from "./Programs.module.css"
import image1 from "../../assets/enrol.webp";
import image2 from "../../assets/support.webp";
import image3 from "../../assets/meet.webp";
import ProgramCard from '../../component/ProgramCard/ProgramCard';

export default function Programs() {
  return (
    <>
        <div className={classes.box}>
            <div className={classes.heading}>How the program works</div>
        <div className={classes.cardBox}>
            <ProgramCard heading='1. Enrol in Yoboshu' body='Just complete a simple 5-10 minute assessment to customize according to your goals and needs.' image={image1} point1='Set up your account' point2='Take assessment' />
            <ProgramCard heading='2. Meet your health coach' body='We’ll assign you with a dedicated Yoboshu health coach for personal guidance and support anytime 24/7.' image={image3} point1='Max up your results' point2='Lose 3X more weight' />
            <ProgramCard heading='3. Support at Every step' body='Talk through challenges, get the support you need to stay focused on your goal weight.' image={image2} point1='Join exclusive members group' point2='Interact with your peers and experts' />

        </div>

        </div>
        <div style={{textAlign:'center'}}>
        <BlueButton body='Set up your account' color="white" textcolor="black"/>
        </div>
    </>
  )
}
