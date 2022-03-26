import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";
function WalletLog() {
  const tableHeading = [
    "Merchant",
    "Current Wallet",
    "Update Wallet",
    "Action",
    "Effective Amt",
    "Order Id",
    "By Admin",
    "Create",
  ];

  const tableData = [
    {
      Merchant: "Katerina Zueva",
      CurrentWallet: "2363507.58",
      UpdateWallet: "2363955.09",
      Action: "ADD",
      EffectiveAmt: "	447.51",
      OrderId: "IN_487540913471",
      ByAdmin: "Akonto Super admin",
      Create: "2022-03-25 10:49:12",
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
                <TableCell align="center">{item.Merchant}</TableCell>
                <TableCell align="center">{item.CurrentWallet}</TableCell>
                <TableCell align="center">{item.UpdateWallet}</TableCell>
                <TableCell align="center">{item.Action}</TableCell>
                <TableCell align="center">{item.EffectiveAmt}</TableCell>
                <TableCell align="center">{item.OrderId}</TableCell>
                <TableCell align="center">{item.ByAdmin}</TableCell>
                <TableCell align="center">{item.Create}</TableCell>
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
        <HeaderComp name="Wallet Log List" />
        <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}




export default WalletLog;


