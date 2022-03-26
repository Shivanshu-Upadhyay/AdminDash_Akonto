import React from 'react'
import './InvoicesType.scss'


function InvoicesType({nofdue,nofpaid,nofunpaid,totnofinv}) {
  return (
    <div className='InvoicesType'>
      <div className="invbox" id="b-1">
        <div className="invdata">
          <div className="nofinv">{nofdue}</div>
          <div className="invtitle">Over Due Invoices</div>
        </div>
        <div className='imgcon'><img src="../../IMAGES/ovd.svg" alt="" /></div>
      </div>
      <div className="invbox" id="b-2">
        <div className="invdata">
          <div className="nofinv">{nofpaid}</div>
          <div className="invtitle">Paid Invoices</div>
        </div>
        <div className='imgcon'><img src="../../IMAGES/paid.svg" alt="" /></div>
      </div>
      <div className="invbox" id="b-3">
        <div className="invdata">
          <div className="nofinv">{nofunpaid}</div>
          <div className="invtitle">Total Unpaid Invoices</div>
        </div>
        <div className='imgcon'><img src="../../IMAGES/totunpaid.svg" alt="" /></div>
      </div>
      <div className="invbox" id="b-4">
        <div className="invdata">
          <div className="nofinv">{totnofinv}</div>
          <div className="invtitle">Total Invoices</div>
        </div>
        <div className='imgcon'><img src="../../IMAGES/totinv.svg" alt="" /></div>
      </div>
    </div>
  )
}

export default InvoicesType