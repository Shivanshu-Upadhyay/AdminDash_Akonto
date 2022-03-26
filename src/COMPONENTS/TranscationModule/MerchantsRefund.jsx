import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MainTable from "../AdminTable/MainTable";

function MerchantsRefund() {
  const tableHeading = [
    "Merchant ",
    "Request ID",
    "Invoice  ID",
    "Issue",
    "Amount",
    "Status",
    "Refund Status",
    "Created",
   
  ];

  const tableData = [
    {
      Merchant: "Katerina Zueva",
      RequestID: "REQ20220314135111603349		",
      InvoiceID: "120034dd331fcc3a9b8",
      Issue: "ZD #1856825",
      Amount: "$205",
      Status: false,
      RefundStatus: true,

      Created: "2022-03-24 01:59:02",
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
                <TableCell align="center">{item.RequestID}</TableCell>
                <TableCell align="center">{item.InvoiceID}</TableCell>
                <TableCell align="center">{item.Issue}</TableCell>
                <TableCell align="center">{item.Amount}</TableCell>
                <TableCell align="center">
                  {item.Status ? (
                    <button className="enable">Success</button>
                  ) : (
                    <button className="disable">Pending</button>
                  )}
                </TableCell>
                
                <TableCell align="center">
                  {item.RefundStatus ? (
                    <button className="enable">Success</button>
                  ) : (
                    <button className="disable">Pending</button>
                  )}
                </TableCell>

                <TableCell align="center">{item.Created}</TableCell>
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
        <div className="d-flex justify-content-between m-4">
          <h2>Merchants Refund List</h2>
        </div>
        <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}



export default MerchantsRefund;







