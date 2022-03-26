import React from 'react'
import { Box } from '@mui/system';
import Card from '../CARD/Card';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import DataGridDemo from '../TABLE/overview';

function Main() {
  return (
    <>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='allcol'>
        <Toolbar />
        <Typography>
          {/* <Flipcard/> */}
        </Typography>
        <Typography style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
        <Card type='card1' cardbg={"rgba(172, 57, 212, 0.15)"} headtxt={"Transaction"}
        data={{txt:"$9321.21.00",colr:"rgba(172, 57, 212, 0.6)"}} strokecol='rgba(171, 56, 211, 1)' picon={'ovd'}/>
       
        <Card type='card1' cardbg={"rgba(172, 57, 212, 0.15)"} headtxt={"Transaction"} 
        data={{txt:"$9321.21.00",colr:"rgba(172, 57, 212, 0.6)"}} strokecol='rgba(171, 56, 211, 1)' picon='paid' />
        <Card type='card1' cardbg={"rgba(172, 57, 212, 0.15)"} headtxt={"Transaction"} 
        data={{txt:"$9321.21.00",colr:"rgba(172, 57, 212, 0.6)"}} strokecol='rgba(171, 56, 211, 1)' picon='totunpaid'/>
        <Card type='card1' cardbg={"rgba(172, 57, 212, 0.15)"} headtxt={"Transaction"} 
        data={{txt:"$9321.21.00",colr:"rgba(172, 57, 212, 0.6)"}} strokecol='rgba(171, 56, 211, 1)' picon='totinv'/>
        </Typography>
        <br />
        <br />
        <DataGridDemo/>
       
      </Box>
    </>
  )
}

export default Main