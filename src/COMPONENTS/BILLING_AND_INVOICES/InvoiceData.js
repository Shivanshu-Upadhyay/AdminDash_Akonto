import React from 'react'
import './Invoices.scss'
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

    ]
var unpaidInv=[
    { id: 1, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 2, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 3, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    { id: 4, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 5, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 6, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    ]
var overdueInv=[
    { id: 1, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 2, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 3, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    ]
var scheduledInv=[
    { id: 1, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 2, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 3, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    ]
var draftInv=[
    { id: 1, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid1', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Completed',dot:'dot'},
    { id: 2, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid2', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Un-Paid',dot:'dot'},
    { id: 3, chbox: chbox, invid: '#123412451', date: 'June1, 2020,08:22 AM', reciep: { imgpath:'picsvg.svg',nam: 'XYZ Store IDpaid3', about:'Online Shop'}, email: 'xyzstore@mail.com', srvtype: 'Server Maintenance', status:'Canceled',dot:'dot'},
    ]
// var allInv=paidInv+unpaidInv+overdueInv+scheduledInv+draftInv
var allInv=paidInv.concat(unpaidInv).concat(overdueInv).concat(scheduledInv).concat(draftInv)
var nofovdue=overdueInv.length
var nofpaid=paidInv.length
var nofunpaid=unpaidInv.length
var totalinv=allInv.length
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

export {tbhead,paidInv,unpaidInv,overdueInv,scheduledInv,draftInv,allInv,styling,nofovdue,nofpaid,nofunpaid,totalinv}