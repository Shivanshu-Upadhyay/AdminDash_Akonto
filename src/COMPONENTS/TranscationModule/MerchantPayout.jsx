import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MainTable from "../AdminTable/MainTable";
import HeaderComp from "../AdminTable/HeaderComp";
function MerchantPayout() {
  const tableHeading = [
    "AC.Type ",
    "Bank",
    "Payout Id",
    "Customer Payout Id",
    "Merchant",
    "Status",
    "Message",
    "UTR",
    "Change Status",
    "Trx Type",
    "Payee",
    "Credit Acc",
    "IFSC",
    "Amount",
    "Remark",
    "Payout Charge",
    "GST Charge",
    "Bank Charge",
    "Wallet Deduct",
    "Currency",
    "Create",
    "Update",
    "B Response",
    "B Enc Req Res",
  ];

  const tableData = [
    {
      ACType: "CURRENT",
      Bank: "ICICI		",
      PayoutId: "487540913471",
      CustomerPayoutId: "",
      Merchant: "Mariam Sargsyan",
      Status: "SUCCESS",
      Message: "Insufficient balance in your account.",
      UTR: 208313700711,

      ChangeStatus: "",
      TrxType: "IMPS",
      Payee: "Abhishek Tyagi",
      CreditAcc: "33666893457",
      IFSC: "SBIN0003642",
      Amount: 3.74,
      Remark: "payout",
      PayoutCharge: "0.1122",
      GSTCharge: "0.02",
      BankCharge: "10.00",
      WalletDeduct: "13.87",
      Currency: "INR",
      Create: "2022-03-24 13:06:07",
      Update: "2022-03-24 13:06:07",
      BResponse: "SBIN002SBIN0003642",
      BEncReqRes: "SBIN0003642SBIN0",
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
                <TableCell align="center">{item.ACType}</TableCell>
                <TableCell align="center">{item.Bank}</TableCell>
                <TableCell align="center">{item.PayoutId}</TableCell>
                <TableCell align="center">{item.CustomerPayoutId}</TableCell>
                <TableCell align="center">{item.Merchant}</TableCell>
                <TableCell align="center">{item.Status}</TableCell>
                <TableCell align="center">{item.Message}</TableCell>
                <TableCell align="center">{item.UTR}</TableCell>
                <TableCell align="center">
                  {item.ChangeStatus}
                  <div className="d-flex  align-items-center justify-content-around">
                    <button className="btn btn-danger">S</button>
                    <button className="btn btn-warning mx-2">F</button>
                    <button className="btn btn-primary">P</button>
                  </div>
                </TableCell>
                <TableCell align="center">{item.TrxType}</TableCell>
                <TableCell align="center">{item.Payee}</TableCell>
                <TableCell align="center">{item.CreditAcc}</TableCell>
                <TableCell align="center">{item.IFSC}</TableCell>
                <TableCell align="center">{item.Amount}</TableCell>
                <TableCell align="center">{item.Remark}</TableCell>
                <TableCell align="center">{item.PayoutCharge}</TableCell>
                <TableCell align="center">{item.GSTCharge}</TableCell>
                <TableCell align="center">{item.BankCharge}</TableCell>
                <TableCell align="center">{item.WalletDeduct}</TableCell>
                <TableCell align="center">{item.Currency}</TableCell>
                <TableCell align="center">{item.Create}</TableCell>
                <TableCell align="center">{item.Update}</TableCell>
                <TableCell>{item.BResponse}</TableCell>
                <TableCell>{item.BEncReqRes}</TableCell>
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
        <HeaderComp name="Merchant Payout  List" />
        <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}

export default MerchantPayout;
