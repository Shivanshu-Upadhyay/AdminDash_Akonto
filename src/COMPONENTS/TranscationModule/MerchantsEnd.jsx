import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";

function MerchantsEnd() {
  const tableHeading = [
    "Merchant Name",
    "Mid",
    "Date",
    "No of trx",
    "Deposit",
    "Deposit Fee",
    "GST Charges",
    "Commission",
    "Balance",
    "RR Amount",
    "Update In Wallet",
    "Wallet Status",
    "Created",
    "Updated",
    
  ];

  const tableData = [
    {
      MerchantName: "Katerina Zueva",
      Mid: "2314	",
      Date: "2022-03-23",
      Nooftrx: "0",
      Deposit: "₹",
      DepositFee: "₹",
      GSTCharges: "₹",
      Commission: "₹0.00",
      Balance: "₹0.00",
      RRAmount: "₹0.00",
      UpdateInWallet: "₹0.00",
      WalletStatus: true,
      Created: "2022-03-24 01:59:02",
      Updated: "2022-03-24 01:59:02",
    },
  ];

  const TableBodyCom = () => {
    return (
      <>
        <TableBody>
          {tableData.map((item, index) => {
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={index}
              >
                <TableCell align="center">{item.MerchantName}</TableCell>
                <TableCell align="center">{item.Mid}</TableCell>
                <TableCell align="center">{item.Date}</TableCell>
                <TableCell align="center">{item.Nooftrx}</TableCell>
                <TableCell align="center">{item.Deposit}</TableCell>
                <TableCell align="center">{item.DepositFee}</TableCell>
                <TableCell align="center">{item.GSTCharges}</TableCell>
                <TableCell align="center">{item.Commission}</TableCell>
                <TableCell align="center">{item.Balance}</TableCell>
                <TableCell align="center">{item.RRAmount}</TableCell>
                <TableCell align="center">{item.UpdateInWallet}</TableCell>
               
                <TableCell align="center">
                  {item.WalletStatus ? (
                    <button className="enable">Updated</button>
                  ) : (
                    <button className="disable">Waiting</button>
                  )}
                </TableCell>
                <TableCell align="center">{item.Created}</TableCell>
                <TableCell align="center">{item.Updated}</TableCell>

                
              </TableRow>
            );
          })}
        </TableBody>
      </>
    );
  };

  return (
    <>
     <div className="restBody">
      <HeaderComp name="Merchants End Of Transaction List" />
      <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}



export default MerchantsEnd;







