import React from 'react'

import './styles.css'

export default function CountPaper(){
    return (
        <div className='containerCount'>
            <div className='upperCountPaper'>
                <span>
                    15
                </span>
            </div>
            <div className='lowerCountPaper'>
                <span>
                    15
                </span>
            </div>
            <div className='ballDetailLeft' />
            <div className='ballDetailRight' />
        </div>
    )
}