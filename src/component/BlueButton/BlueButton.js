import React from 'react'
import styles from "./BlueButton.module.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function BlueButton({body,color,textcolor}) {
  return (
    <div className={color === 'white'? styles.whiteButton: styles.blueButton } style={{backgroundColor:`${color}`}}>
    <span style={{color:`${textcolor}`}}>
       {body}   
    </span>  
    <span>
        {
            color !== 'white'? <ArrowForwardIcon style={{fontSize:'medium',paddingLeft:'1rem'}}/> : <></>
        }
        
    </span>
    </div>
  )
}
