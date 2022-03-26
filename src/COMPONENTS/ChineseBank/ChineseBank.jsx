import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";

function ChineseBank() {
  const tableHeading = [
    "Payment Gate",
    "Title",
    "Title En",
    "Status",
    "Action",
  ];

  const tableData = [
    {
      PaymentGate: "YTpay",
      Title: "上海银行",
      TitleEn: "Shanghai Bank",
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
                <TableCell align="center">{item.PaymentGate}</TableCell>
                <TableCell align="center">{item.Title}</TableCell>
                <TableCell align="center">{item.TitleEn}</TableCell>
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
                        src="../../IMAGES/eye.svg"
                        alt="not"
                        style={{ width: "20px" }}
                      />
                    </button>
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
        <HeaderComp name="Manage Akonto Chinese Bank List" />
        <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}

export default ChineseBank;
