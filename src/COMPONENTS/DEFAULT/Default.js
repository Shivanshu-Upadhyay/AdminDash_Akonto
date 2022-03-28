import * as React from 'react';
import './Default.scss'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route,} from "react-router-dom";
import HomePage from "./HomePage";
import Sidebar from '../SIDEBAR/Sidebar';
import SubAdmin from "../SubAdmin/SubAdmin";
import Mid from '../Midmodule/Mid';
import ChineseBank from '../ChineseBank/ChineseBank';
import Bankcode from '../Bankcode/Bankcode';
import BankcodeAkonto from "../BankcodeAkonto/BankcodeAkonto";
import MerchantAdmin from "../MerchantModule/MerchantAdmin";
import MerchantsTransaction from "../TranscationModule/MerchantsTransaction";
import MerchantsEnd from "../TranscationModule/MerchantsEnd";
import MerchantsRefund from "../TranscationModule/MerchantsRefund";
import MerchantPayout from "../TranscationModule/MerchantPayout";
import BannerAdmin from "../BannerModule/BannerAdmin";
import AdminLogs from '../ActivityLogs/AdminLogs';
import MerchantsLog from "../ActivityLogs/MerchantsLog";
import WalletLog from "../ActivityLogs/WalletLog";
import Contact from '../ContactModule/Contact';
import CMS from "../CMSmodule/CMS";
import Meta from '../MetaModule/Meta';
import SiteSetup from "../SettingModule/SiteSetup";
import ChangePass from "../Changepass/ChangePass";
import PGmodule from '../PGmodule/PGmodule';

const drawerWidth = 240;
const sbar = { backgroundImage:"url('../../IMAGES/sbar.jpg')",backgroundSize:"100% 100%"}

export default function Default() {
  const[sidetog,setsidetog]=React.useState(true)
  const[tog,settog]=React.useState(false)
  const hide = () => {
    if (window.innerWidth <=1200) {
      setsidetog(false)
      settog(true)
    } else {
      setsidetog(true)
      settog(false)
    }
  }
  window.onresize=hide
  window.onload=hide
  return (
    <Box sx={{ display: "flex" }} className="allcol">
      <CssBaseline />
      <AppBar
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        className="allcol"
      >
        <Toolbar className="allcol">
          {tog && (
            <div
              style={{ color: "black", position: "fixed" }}
              onClick={() => {
                setsidetog(!sidetog);
              }}
            >
              <MenuIcon />
            </div>
          )}
          <div className="head">
            <div className="logoo">
              <div className="logoo">
                <img src="../../IMAGES/logo.svg" alt="abc" />{" "}
              </div>
            </div>
            <div className="headerr">
              <div className="searchbarCon" style={sbar}>
                <img src="../../IMAGES/sicon.svg" alt="abc" />
                <input type="text" placeholder="Search here..." />
              </div>
              <div className="proset">
                <div className="profileCon">
                  <div className="name">
                    <div style={{ fontSize: "17px" }}>
                      Hello, <b>Franklin</b>
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "rgba(153, 153, 153, 1)",
                      }}
                    >
                      Super Admin
                    </div>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="../../IMAGES/picsvg.svg" alt="abc" />
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="settingCon">
                  <div className="set">
                    <img src="../../IMAGES/set.svg" alt="abc" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {sidetog && (
        <Drawer
          className="am"
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }} className="allcol am">
            <Sidebar />
            {/* <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts',].map((text, index) => (
              <ListItem button key={text} style={{display:"flex"}}>
                <ListItemIcon>
                  icon
                </ListItemIcon>
                <ListItemText primary={"text"} />
              </ListItem>
            ))}
            <Link to="/about">About</Link>
          </List> */}
          </Box>
        </Drawer>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SubAdmin" element={<SubAdmin />} />
        <Route path="/PaymentGates" element={<PGmodule />} />
        <Route path="/Mid" element={<Mid />} />
        <Route path="/ChineseBank" element={<ChineseBank />} />
        <Route path="/BankcodeAkonto" element={<BankcodeAkonto />} />
        <Route path="/BankCode" element={<Bankcode />} />
        <Route path="/MerchantAdmin" element={<MerchantAdmin />} />
        <Route
          path="/MerchantsTransaction"
          element={<MerchantsTransaction />}
        />
        <Route path="/MerchantsRefund" element={<MerchantsRefund />} />
        <Route path="/MerchantsEnd" element={<MerchantsEnd />} />
        <Route path="/MerchantPayout" element={<MerchantPayout />} />
        <Route path="/BannerAdmin" element={<BannerAdmin />} />
        <Route path="/AdminLogs" element={<AdminLogs />} />
        <Route path="/MerchantsLogs" element={<MerchantsLog />} />
        <Route path="/WalletLogs" element={<WalletLog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/CMS" element={<CMS />} />
        <Route path="/Meta" element={<Meta />} />
        <Route path="/SiteSetup" element={<SiteSetup />} />
        <Route path="/ChangePassword" element={<ChangePass />} />
      </Routes>
    </Box>
  );
}

