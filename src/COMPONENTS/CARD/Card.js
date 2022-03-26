import React from 'react'
import './Card.scss'


function Card({type="card1",cardbg,headtxt,data,strokecol='',picon}) {
    var pbar= <div style={{height:"100px",width:"100px",borderRadius:"50%"}}>
            <svg xmlns="<http://www.w3.org/2000/svg>">
                <circle cx="50" cy="50" r="40" stroke={'transparent'} strokeWidth="10px" fill='rgba(255, 255, 255, 1'/>
                <circle cx="50" cy="50" r="40" stroke={strokecol} strokeWidth="10px" fill='none' strokeDashoffset={252 - (252 * 20) / 100} strokeDasharray={252} />
            </svg>
    </div>
    var picon=<div className='imgcon'><img src={'../../IMAGES/'+picon+'.svg'} alt="" /></div>


    var cardhead="card1head"
    var carddata="card1data"
    var dl=<div><div className={cardhead}>{headtxt}</div><div className={carddata} style={{color:data.colr}}>{data.txt}</div></div>
    var dr=pbar
    if (type==="card2") {
        var cardhead="card2head"
        var carddata="card2data"
        dr=dl
        dl=picon
    }
    return(
        <div className="card" style={{background:cardbg}}>
            {dl}
            {dr}
            {/* <span>hello</span> */}
        </div>
    )
}

export default Card