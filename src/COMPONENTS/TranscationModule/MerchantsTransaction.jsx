import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";

function MerchantsTransaction() {
  const tableHeading = [
    "Merchant Name",
    "Mid",
    "MOrder No",
    "Order No",
    "Transaction Id",
    "Pay By",
    "Payment Status",
    "Currency",
    "Total Ammount",
    "Tax Amount",
    "Payin Charges",
    "GST Amount",
    "Bank GST Amount",
    "Bank Charges",
    "RR Amount",
    "Net Amt",
    "Status",
    "Create",
    "Details",
  ];

  const tableData = [
    {
      MerchantName: "Katerina Zueva",
      Mid: "189052538242f38a2db3	",
      MOrderNo: "30157283",
      OrderNo: "1158af467f77bf309c9",
      TransactionId: "835894433",
      PayBy: "Wallet",
      Paymentstatus: "Payment initiate",
      Currency: "INR",
      Totalammount: "₹7900",
      Taxamount: "₹9000",
      PayinCharges: "₹368.14",
      GSTAmount: "₹40.67	",
      BankGSTAmount: "₹25.60",
      BankCharges: "₹142.20",
      RRAmount: "₹395.00",
      NetAmt: "₹7070.59",
      Status: true,
      Create: "2022-03-24 14:55:54",
      
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
                <TableCell align="center">{item.MOrderNo}</TableCell>
                <TableCell align="center">{item.OrderNo}</TableCell>
                <TableCell align="center">{item.TransactionId}</TableCell>
                <TableCell align="center">{item.PayBy}</TableCell>
                <TableCell align="center">{item.Paymentstatus}</TableCell>
                <TableCell align="center">{item.Currency}</TableCell>
                <TableCell align="center">{item.Totalammount}</TableCell>
                <TableCell align="center">{item.Taxamount}</TableCell>
                <TableCell align="center">{item.PayinCharges}</TableCell>
                <TableCell align="center">{item.GSTAmount}</TableCell>
                <TableCell align="center">{item.BankGSTAmount}</TableCell>
                <TableCell align="center">{item.BankCharges}</TableCell>
                <TableCell align="center">{item.RRAmount}</TableCell>
                <TableCell align="center">{item.NetAmt}</TableCell>
                <TableCell align="center">
                  {item.Status ? (
                    <button className="enable">Success</button>
                  ) : (
                    <button className="disable">Waiting</button>
                  )}
                </TableCell>
                <TableCell align="center">{item.Create}</TableCell>
                <TableCell align="center">
                  {" "}
                  <button>
                    <img
                      src="../../IMAGES/eye.svg"
                      alt="not"
                      style={{ width: "25px" }}
                    />
                  </button>
                </TableCell>
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
        <HeaderComp name="Merchants Transaction  List" />
        <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}


export default MerchantsTransaction;






