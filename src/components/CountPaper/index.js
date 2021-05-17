import React from 'react'

import styles from './styles.module.css'

export default function CountPaper(props){


    return (
        <div className={styles.container}>
            <div className={styles.containerCount}>
                <div className={styles.upperCountPaper}>
                    <span>
                        {props.value}
                    </span>
                </div>
                <div className={styles.lowerCountPaper}>
                    <span>
                        {props.value}
                    </span>
                </div>
                <div className={styles.ballDetailLeft}/>
                <div className={styles.ballDetailRight} />
            </div>
            <div>
                <span className={styles.timeText}>
                    {props.title}
                </span>
            </div>
        </div>
    )
}