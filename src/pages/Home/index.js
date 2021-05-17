import React, { useState } from 'react'
import styles from './styles.module.css'

import CountPaper from '../../components/CountPaper'

export default function Home(){

    const getCountdownMili = () => {
        const initialDate = new Date(2021, 4, 18).getTime()
        const dateToday = new Date().getTime()

        return initialDate - dateToday
    }

    
    const [countdownMili, setCountdownMili] = useState(getCountdownMili)

    setInterval(() => {
        setCountdownMili(getCountdownMili)
    }, 1000);

    const countdown = {
            days: Math.floor(countdownMili / 86400000),
            hours: Math.floor((countdownMili / 3600000 )% 24),
            minutes: Math.floor(( countdownMili / 60000 ) % 60),
            seconds: Math.floor((countdownMili / 1000) % 60),
    }

   
    return (
        <div 
            className={styles.container}
        >
            <span>WE'RE LAUNCHING SOON</span> 
            <div className={styles.containerCounts}>
                <CountPaper title={'DAYS'} value={countdown.days}/>
                <CountPaper title={'HOURS'} value={countdown.hours} />
                <CountPaper title={'MINUTES'} value={countdown.minutes}/>
                <CountPaper title={'SECONDS'} value={countdown.seconds}/>
            </div>
        </div>
    )
}