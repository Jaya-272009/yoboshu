import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import classes from "./ProgramCard.module.css";

export default function ProgramCard({heading,body , image,point1,point2}) {
  return (
    <div className={classes.card}>
        <div className={classes.heading}> {heading}</div>
        <div className= {classes.cardBody}> {body} </div>
            <span className={classes.imagebox}>
                <img src={image} alt="image" className={classes.image}/>
            </span>
        <div className={classes.point1}><DoneIcon style={{fontSize:'medium'}} /> {point1} </div>
        <div className={classes.point1}><DoneIcon style={{fontSize:'medium'}} />  {point2} </div>

    </div>
  )
}
