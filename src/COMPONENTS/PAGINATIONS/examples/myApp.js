import React, { useState, useMemo } from 'react';
import Pagination from '../Pagination';
// import data from './data/mock-data.json';
import './style.scss';
const chbox = <input type="checkbox" />
var tbhead = ['#', chbox, 'ID Invoice', 'Date', 'Recipient', 'Email','Service Type','Status','']
var paidInv=[
    { id: 1, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 2, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 3, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 4, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 5, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 6, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 7, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 8, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 9, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 10, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 11, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 12, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 13, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 14, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 15, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 16, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 17, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 18, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 19, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 20, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 21, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 22, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 23, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 24, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 25, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 26, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 27, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 28, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 29, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 30, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 31, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 32, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 33, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 34, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 35, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 36, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 37, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 38, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 39, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},

    ]
const data=paidInv
const styling=(m)=>{
    var temp=''
    switch (m) {
        case 'Completed':
            temp = <div className='bbtn'>{m}</div>
            break;
        case 'Un-Paid':
            temp = <div id='unp' className='bbtn'>{m}</div>
            break;
        case 'Canceled':
            temp = <div id='can' className='bbtn'>{m}</div>
            break;
        case 'dot':
            temp = <img src='../../IMAGES/3dot.svg' style={{ height: "22px", width: "5px" }} />
            break;
        default:
            break;
    }
    return temp
}
const reciep=(imgpath,nam,about)=>{
  return <div className='reciep'><img src={"../../IMAGES/" +imgpath} alt="" /><div><b>{nam}</b><br/>{about}</div></div>
}

let PageSize = 10;

export default function MyApp({tbhead,data}) {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className='Tbapp'>
      <table className='table'>
        <thead>
          <tr>
            {tbhead.map((i)=>
            <th scope="col">{i}</th>

            )}
          </tr>
        </thead>
        <tbody>
          {currentTableData.map(i => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.chbox}</td>
                <td><b>{i.invid}</b></td>
                <td>{i.date}</td>
                <td>{reciep(i.reciep.imgpath,i.reciep.nam,i.reciep.about)}</td>
                <td>{i.email}</td>
                <td>{i.srvtype}</td>
                <td>{styling(i.status)}</td>
                <td>{styling(i.dot)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination className="pagination-bar" currentPage={currentPage} totalCount={data.length} pageSize={PageSize} onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
}
