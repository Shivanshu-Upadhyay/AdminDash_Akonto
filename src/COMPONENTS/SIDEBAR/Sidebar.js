import React, { useState } from 'react'
import './Sidebar.scss'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Link } from 'react-router-dom';






function Sidebar() {

  const [drop1, setDrop1] = useState(false)
  const [drop2, setDrop2] = useState(false)
  const [drop3, setDrop3] = useState(false)
  const [drop4, setDrop4] = useState(false)
  const [drop5, setDrop5] = useState(false)
  const [drop6, setDrop6] = useState(false)
  const [drop7, setDrop7] = useState(false)
  const [drop8, setDrop8] = useState(false)
  const [drop9, setDrop9] = useState(false)
  const [drop10, setDrop10] = useState(false)
  const [drop11, setDrop11] = useState(false)
  const [drop12, setDrop12] = useState(false)
  const [drop13, setDrop13] = useState(false)
  const [drop14, setDrop14] = useState(false)
  const [drop15, setDrop15] = useState(false)
  // const togglee=()=>{
  //   setDrop(!drop)
  // }
  // var fw="normal"
  const jsdata = {
    f1: () => {
      setDrop1(!drop1)
    },
    f2: () => {
      setDrop2(!drop2)
    },
    f3: () => {
      setDrop3(!drop3)
    },
    f4: () => {
      setDrop4(!drop4)
    },
    f5: () => {
      setDrop5(!drop5)
    },
    f6: () => {
      setDrop6(!drop6)
    },
    f7: () => {
      setDrop7(!drop7)
    },
    f8: () => {
      setDrop8(!drop8)
    },
    f9: () => {
      setDrop9(!drop9)
    },
    f10: () => {
      setDrop10(!drop10)
    },
    f11: () => {
      setDrop11(!drop11)
    },
    f12: () => {
      setDrop12(!drop12)
    },
    f13: () => {
      setDrop13(!drop13)
    },
    f14: () => {
      setDrop14(!drop14)
    },
    f15: () => {
      setDrop15(!drop15)
    },
  }
  const sidebardata = [
    {
      trfa: false,
      icon: <img src="../../IMAGES/submerchant.svg" alt="abc" />,
      title: drop1 ? <div>Sub Admin Module</div> : <div>Sub Admin Module</div>,
      dropd: drop1 ? (
        <ArrowDropDownIcon onClick={jsdata.f1} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f1} />
      ),
      dropcon: drop1 && (
        <div className="dropcon">
          <div>
            <Link className="activ" to="/SubAdmin">
              Sub Admin
            </Link>
          </div>
        </div>
      ),
    },

    {
      trfa: false,
      icon: <img src="../../IMAGES/ref.svg" alt="abc" />,
      title: drop3 ? <div>PG Module</div> : <div>PG Module</div>,
      dropd: drop3 ? (
        <ArrowDropDownIcon onClick={jsdata.f3} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f3} />
      ),
      dropcon: drop3 && (
        <div className="dropcon">
          <div>
            <Link className="activ" to="/alltransaction">
              Payment Gates
            </Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/sale.svg" alt="abc" />,
      title: "Mid Module",
      dropd: drop4 ? (
        <ArrowDropDownIcon onClick={jsdata.f4} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f4} />
      ),
      dropcon: drop4 && (
        <div className="dropcon">
          <div>
            <Link className="" to="/Mid">
              Mid
            </Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/wallet.svg" alt="abc" />,
      title: "Chinese Bank Module",
      dropd: drop5 ? (
        <ArrowDropDownIcon onClick={jsdata.f5} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f5} />
      ),
      dropcon: drop5 && (
        <div className="dropcon">
          <div>
            <Link className="" to="/ChineseBank">
              Chinese Bank
            </Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/dispute.png" alt="abc" />,
      title: "BankCode Akonto",
      dropd: drop6 ? (
        <ArrowDropDownIcon onClick={jsdata.f6} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f6} />
      ),
      dropcon: drop6 && (
        <div className="dropcon">
          <div>
            <Link className="" to="/BankcodeAkonto">
              BankCode Akonto
            </Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/report.svg" alt="abc" />,
      title: "Bankcode Module",
      dropd: drop8 ? (
        <ArrowDropDownIcon onClick={jsdata.f8} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f8} />
      ),
      dropcon: drop8 && (
        <div className="dropcon">
          <div>
            <Link className="" to="/BankCode">
              BankCode
            </Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/report.svg" alt="abc" />,
      title: "Merchant Module ",
      dropd: drop7 ? (
        <ArrowDropDownIcon onClick={jsdata.f7} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f7} />
      ),
      dropcon: drop7 && (
        <div className="dropcon">
          <div>
            <Link className="" to="/MerchantAdmin">
              MerchantAdmin
            </Link>
          </div>
        </div>
      ),
    },

    {
      trfa: false,
      icon: <img src="../../IMAGES/bill.svg" alt="abc" />,
      title: "Transcation Module",
      dropd: drop10 ? (
        <ArrowDropDownIcon onClick={jsdata.f10} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f10} />
      ),
      dropcon: drop10 && (
        <div className="dropcon">
          <div>
            <Link className="activ" to="/MerchantsTransaction">
              Merchants Transaction
            </Link>
          </div>
          <div>
            <Link className="activ" to="/MerchantsEnd">
              Merchants End Of Transaction List
            </Link>
          </div>
          <div>
            <Link className="activ" to="/MerchantsRefund">
              Merchants Refund
            </Link>
          </div>
          <div>
            <Link className="activ" to="/MerchantPayout">
              Merchant Payout
            </Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/employee.svg" alt="abc" />,
      title: "Banner Module",
      dropd: drop11 ? (
        <ArrowDropDownIcon onClick={jsdata.f11} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f11} />
      ),
      dropcon: drop11 && (
        <div className="dropcon">
          <div>
            <Link className="" to="/BannerAdmin">
              Banner Admin
            </Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/business.svg" alt="abc" />,
      title: "Activity Logs",
      dropd: drop12 ? (
        <ArrowDropDownIcon onClick={jsdata.f12} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f12} />
      ),
      dropcon: drop12 && (
        <div className="dropcon">
          <div>
            <Link className="" to="/AdminLogs">
              Admin Logs
            </Link>
          </div>
          <div>
            <Link className="" to="/MerchantsLogs">
              Merchants Logs
            </Link>
          </div>
          <div>
            <Link className="" to="/WalletLogs">
              Wallet Logs
            </Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/submerchant.svg" alt="abc" />,
      title: drop1 ? <div>Contact Module</div> : <div>Contact Module</div>,
      dropd: drop1 ? (
        <ArrowDropDownIcon onClick={jsdata.f1} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f1} />
      ),
      dropcon: drop1 && (
        <div className="dropcon">
          <div>
            <Link className="activ" to="/Contact">
              Contact
            </Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/ref.svg" alt="abc" />,
      title: drop3 ? <div>CMS Module</div> : <div>CMS Module</div>,
      dropd: drop3 ? (
        <ArrowDropDownIcon onClick={jsdata.f3} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f3} />
      ),
      dropcon: drop3 && (
        <div className="dropcon">
          <div>
            <Link className="activ" to="/CMS">
              CMS
            </Link>
          </div>
        </div>
      ),
    },

    {
      trfa: false,
      icon: <img src="../../IMAGES/report.svg" alt="abc" />,
      title: "Meta Module",
      dropd: drop7 ? (
        <ArrowDropDownIcon onClick={jsdata.f7} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f7} />
      ),
      dropcon: drop7 && (
        <div className="dropcon">
          <div>
            <Link className="" to="/Meta">
              Meta
            </Link>
          </div>
        </div>
      ),
    },

    {
      trfa: false,
      icon: <img src="../../IMAGES/wallet.svg" alt="abc" />,
      title: "Setting Module",
      dropd: drop5 ? (
        <ArrowDropDownIcon onClick={jsdata.f5} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f5} />
      ),
      dropcon: drop5 && (
        <div className="dropcon">
          <div>
            <Link className="" to="/SiteSetup">
              Site Setup
            </Link>
          </div>
        </div>
      ),
    },

    {
      trfa: false,
      icon: <img src="../../IMAGES/changepass.svg" alt="abc" />,
      title: "Change Password",
      dropd: drop13 ? (
        <ArrowDropDownIcon onClick={jsdata.f13} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f13} />
      ),
      dropcon: drop13 && (
        <div className="dropcon">
          <div>
            <Link className="" to="/ChangePassword">
              Change Password
            </Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/logout.svg" alt="abc" />,
      title: "Logout",
      dropd: drop14 ? (
        <ArrowDropDownIcon onClick={jsdata.f14} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f14} />
      ),
      dropcon: drop14 && (
        <div className="dropcon">
          <div>Site Setup</div>
        </div>
      ),
    },
  ];
  const mmd = sidebardata.map((i) =>
    <li>
      <div className='lii'>
        <div className='ictit'><div className='ict'>{i.icon}</div>&nbsp;&nbsp;&nbsp;&nbsp;<span>{i.title}</span></div>
        {i.dropd}
      </div>
      {i.dropcon}
    </li>
  )


  return (
    <div>
      <div className='SideBar '>

        <div className='lii' style={{ paddingLeft: "20px"}}>
          <div className='ictit'><div className='sidebarIcon'><img src='../../IMAGES/dashboard.svg' alt='abc' /></div><span style={{fontWeight: "800", fontSize: "20px" }}><Link to='/' className='lin'>Dashboard</Link></span></div>
        </div>
        <div className=''>
          <ul>
            {mmd}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Sidebar