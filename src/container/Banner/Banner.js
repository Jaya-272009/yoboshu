import React from 'react'
import classes from "./Banner.module.css"
import Wbutton from './Wbutton'

export default function Banner() {
  return (
    <div className={classes.BannerBox}>
        <span className={classes.BannerText}>
            Start your 1 weeks FREE trials before any commitment
        </span>
        <span className={classes.BannerButton}>
          <Wbutton />
        </span>
    </div>
  )
}
