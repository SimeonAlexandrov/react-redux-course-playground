import _ from 'lodash'
import React from 'react'
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines"

export default (props) => {
    const avg = props.data.reduce((total, score) => total + score) / props.data.length
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}> 
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <p>{_.round(avg) } {props.units}</p>
        </div>
        
    )
}
