import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";
import { Box } from "@mui/system";
function Mid() {
  const tableHeading = [
    "Title",
    "MId",
    "Key",
    "IV",
    "Merchant URL",
    "Merchant Other URL",
    "Action",
  ];

  const tableData = [
    {
      Title: "Swift Trading Cashfree",
      MId: "18212356fe8ed763f4450ac11c321281",
      Key: "a323060d8676206489e4480d39cc8f1747cc23a3",
      IV: "123",
      MerchantURL: "https://arvelli.in/cashfree-submition.php",
      MerchantOtherURL: "https://arvelli.co.in/cashfree-submition.php",
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
                <TableCell align="center">{item.Title}</TableCell>
                <TableCell align="center">{item.MId}</TableCell>
                <TableCell align="center">{item.Key}</TableCell>
                <TableCell align="center">{item.IV}</TableCell>
                <TableCell align="center">{item.MerchantURL}</TableCell>
                <TableCell align="center">{item.MerchantOtherURL}</TableCell>
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="allcol restBody" >
        <HeaderComp name="Manage Mid List" />
        <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </Box>
    </>
  );
}

export default Mid;
