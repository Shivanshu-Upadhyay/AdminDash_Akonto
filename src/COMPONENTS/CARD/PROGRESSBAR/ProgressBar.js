import React from 'react'
import './ProgressBar.scss'

function ProgressBar() {
  return (
    <svg xmlns="<http://www.w3.org/2000/svg>">
      <circle cx="50" cy="50" r="40" stroke='blue' strokeWidth="11px" fill='none'/>
      <circle cx="50" cy="50" r="40" stroke='yellow' strokeWidth="11px" fill='none' strokeDashoffset={252 - (252 * 20) / 100} strokeDasharray={252} />
    </svg>
  )
}

export default ProgressBar