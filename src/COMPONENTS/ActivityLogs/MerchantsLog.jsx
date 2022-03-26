import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";
function MerchantsLog() {
  const tableHeading = ["Admin", "URL", "Time Spend", "Create", "Update"];

  const tableData = [
    {
      Admin: "Akonto Super admin",
      URL: "https://www.akonto.co/banner/admin",
      TimeSpend: "0 hr :0 min :0 sec",
      Create: "2022-03-25 10:49:12",
      Update: "2022-03-25 10:49:12",
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
                <TableCell align="center">{item.Admin}</TableCell>
                <TableCell align="center">{item.URL}</TableCell>
                <TableCell align="center">{item.TimeSpend}</TableCell>
                <TableCell align="center">{item.Create}</TableCell>
                <TableCell align="center">{item.Update}</TableCell>
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
        <HeaderComp name=" Merchants Log List" />
        <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}



export default MerchantsLog

