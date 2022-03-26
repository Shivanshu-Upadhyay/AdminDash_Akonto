import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";
function Meta() {
  const tableHeading = ["Title", "Meta Keyword", "Meta Description","Last Update", "Action"];

  const tableData = [
    {
      Title: "Home Page",
      MetaKeyword: "home",
      MetaDescription: "home",
      LastUpdate: "12-March-2019",
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
                <TableCell align="center">{item.MetaKeyword}</TableCell>
                <TableCell align="center">{item.MetaDescription}</TableCell>
                <TableCell align="center">{item.LastUpdate}</TableCell>

                <TableCell align="center">
                  <div className="d-flex  align-items-center justify-content-around">
                    <button>
                      <img
                        src="../../IMAGES/edit.png"
                        alt="not"
                        style={{ width: "20px" }}
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
        <HeaderComp name=" Pages List" />
        <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}


export default Meta;

