import React from 'react'
import './Invoices.scss'
import InvoicesType from './InvoicesType' 
import {tbhead,paidInv,unpaidInv,overdueInv,scheduledInv,draftInv,allInv,styling,nofovdue,nofpaid,nofunpaid,totalinv} from './InvoiceData'
import MyApp from '../PAGINATIONS/examples/myApp'
import Filterr from '../FILTER/Filterr'
const reciep=(imgpath,nam,about)=>{
  return <div className='reciep'><img src={"../../IMAGES/" +imgpath} alt="" /><div><b>{nam}</b><br/>{about}</div></div>
}

var Invoices = ({title,tablehead,tablerow}) => {
    var merchantslid10 = 1
  return (
    <div className="Invoices">
      <div className='dashh'>{title}</div>
      
      <Filterr p={false} tpos={"380px"} rpos={"30px"}/>
      <InvoicesType nofdue={nofovdue} nofpaid={nofpaid} nofunpaid={nofunpaid} totnofinv={totalinv}/>
     <br /><br /><br /><br />
     <MyApp tbhead={tablehead} data={tablerow} />
      {/* <table class="table">
        <thead>
          <tr>
            {tablehead.map((i)=>
            <th scope="col">{i}</th>

            )}
          </tr>
        </thead>
        <tbody>
            {tablerow.map((i)=>
              <tr>
                <td>{merchantslid10++}</td>
                <td>{i.chbox}</td>
                <td><b>{i.invid}</b></td>
                <td>{i.date}</td>
                <td>{reciep(i.reciep.imgpath,i.reciep.nam,i.reciep.about)}</td>
                <td>{i.email}</td>
                <td>{i.srvtype}</td>
                <td>{styling(i.status)}</td>
                <td>{styling(i.dot)}</td>
              </tr>
            )}
        </tbody>
      </table> */}
    </div>
  )
}

export default Invoices