import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";
function SiteSetup() {
  const tableHeading = ["Details"];

  const tableData = [
    {
      Title: "Contact No.",
      Data: "+91 123456789012",
    },
    {
      Title: "Email",
      Data: "akonto.co@gmail.com",
    },
    {
      Title: "Copyright",
      Data: "© 2020 All Rights Reserved.",
    },
    {
      Title: "Address",
      Data: "XX",
    },
    {
      Title: " Facebook",
      Data: "https://www.facebook.com/akonto.co/",
    },
    {
      Title: " Twitter",
      Data: "[removed]alert(pankaj);[removed]",
    },
    {
      Title: " Instagram",
      Data: "QQ",
    },
    {
      Title: " Google plus",
      Data: "https://google.com/akonto.co/",
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
                <TableCell align="left">{item.Data}</TableCell>
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

      <HeaderComp name=" Manage Site Setting  Details" />
      <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
    </div>
    </>
  );
}



export default SiteSetup;

