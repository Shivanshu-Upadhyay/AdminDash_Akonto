import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Frontcard() {
  return (
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <div style={{height:"230px",backgroundColor:"red"}}></div>
       </CardActionArea>
    </Card>
  )
}

function Backcard() {
  return (
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <div style={{height:"230px",backgroundColor:"green"}}></div>
       </CardActionArea>
    </Card>
  )
}

export  {Frontcard,Backcard};

// export default function Frontcard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <div style={{height:"200px",backgroundColor:"red"}}></div>
//        </CardActionArea>
//     </Card>
//   );
// }
