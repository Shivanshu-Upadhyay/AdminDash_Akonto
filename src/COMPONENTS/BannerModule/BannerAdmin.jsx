import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";
function BannerAdmin() {
  const tableHeading = [
    
    "Title",
    "Image",
    "Status",
    "Action",
  ];

  const tableData = [
    {
      Title: "",
      Image: "",
      Status: false,
      Action:false
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
                <TableCell align="center">{item.Status?item.Title:"Not User" }</TableCell>
                <TableCell align="center">
                  {item.Image ? (
                    <img
                      src="../../IMAGES/atmblue.jpg"
                      alt="error"
                      style={{ width: "130px", height: "130px" }}
                    />
                  ) : (
                    "Not found"
                  )}
                </TableCell>

                <TableCell align="center">
                  {item.Status ? (
                    item.Status ? (
                      <button className="enable">Enable</button>
                    ) : (
                      <button className="disable">Disable</button>
                    )
                  ) : (
                    "No Status"
                  )}
                </TableCell>

                <TableCell>
                  <div className="d-flex  align-items-center justify-content-around">
                    {item.Action ? (
                      <>
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
                      </>
                    ) : (
                      "No Action"
                    )}
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
        <HeaderComp name="Manage Banner List" />
        <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}


export default BannerAdmin;

