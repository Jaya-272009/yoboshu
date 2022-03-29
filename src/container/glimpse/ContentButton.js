import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import styles from "./glimpse.module.css"

export default function ContentButton({body,last}) {
  return (
    <div className={styles.button}>
        {last === true?
        <></>
        :
        <span >
            <DoneIcon style={{fontSize:'large',color:'#7D8FFF'}} />
        </span>
        
        }
        <span style={{padding:'0 .5rem'}} >
            {body} 
        </span>  
    </div>
    )
}
