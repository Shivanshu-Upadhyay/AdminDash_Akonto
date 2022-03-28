import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";
function PGmodule() {
  const tableHeading = [
    "Type",
    "PG Name",
    "Mer. No",
    "Gate Number",
    "Key",
    "Status",
    "Created_on",
    "Updated_on",
    "Action",
  ];

  const tableData = [
    {
      Type: "Payin",
      PGName:
        "lorem ipsum dolor lorem ipsum ",
      MerNo: "1",
      GateNumber: "1",
      Key: "1",
      Status: true,
      CreatedOn: "2020-08-05 13:13:08",
      UpdatedOn: "2020-08-05 13:13:08",
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
                <TableCell align="center">{item.PGName}</TableCell>
                <TableCell align="center">{item.MerNo}</TableCell>
                <TableCell align="center">{item.GateNumber}</TableCell>
                <TableCell align="center">{item.Key}</TableCell>
                <TableCell align="center">
                  {item.Status ? (
                    <button className="enable">Enable</button>
                  ) : (
                    <button className="disable">Disable</button>
                  )}
                </TableCell>
                <TableCell align="center">{item.CreatedOn}</TableCell>
                <TableCell align="center">{item.UpdatedOn}</TableCell>

                <TableCell align="center">
                  <div className="d-flex  align-items-center justify-content-around">
                    <button>
                      <img
                        src="../../IMAGES/edit.png"
                        alt="not"
                        style={{ width: "22px" }}
                      />
                    </button>

                    <button>
                      <img
                        src="../../IMAGES/delete.png"
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
        <HeaderComp name=" Manage Our Gate List" />
        <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}

export default PGmodule;
