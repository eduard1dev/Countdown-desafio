import React from 'react'
import './styles.css'

import CountPaper from '../../components/CountPaper'

export default function Home(){
    return (
        <div 
            className='container'
        >
            <span>WE'RE LAUNCHING SOON</span> 
            <div>
                <CountPaper/>
            </div>
        </div>
    )
}