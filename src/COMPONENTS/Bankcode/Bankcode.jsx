import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";
function Bankcode() {
  const tableHeading = [
    "Type",
    "Payment Gate",
    "Title",
    "Code",
    "Akonto Code",
    "Bank Services Charge",
    "Status",
    "Action",
  ];

  const tableData = [
    {
      Type: "Wallet",
      PaymentGate: "Payu",
      Title: "Airtel Money",
      Code: "AMON",
      AkontoCode: 810,
      BankServicesCharge: 1.80,
      Status: true,
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
                <TableCell align="center">{item.Type}</TableCell>
                <TableCell align="center">{item.PaymentGate}</TableCell>
                <TableCell align="center">{item.Title}</TableCell>
                <TableCell align="center">{item.Code}</TableCell>
                <TableCell align="center">{item.AkontoCode}</TableCell>
                <TableCell align="center">{item.BankServicesCharge}</TableCell>
                <TableCell align="center">
                  {item.Status ? (
                    <button className="enable">Enable</button>
                  ) : (
                    <button className="disable">Disable</button>
                  )}
                </TableCell>

                <TableCell>
                  <div className="d-flex  align-items-center justify-content-around">
                    
                    <button>
                      <img
                        src="../../IMAGES/edit.png"
                        alt="not"
                        style={{ width: "15px" }}
                      />
                    </button>
                    <button>
                      <img
                        src="../../IMAGES/delete.png"
                        alt="not"
                        style={{ width: "13px" }}
                      />
                    </button>
                  </div>
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
        <HeaderComp name="Manage Bankcode List" />
        <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}

export default Bankcode;




