import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";

function SubAdmin() {
  const tableHeading = [
    "Sub Admin",
    "Email",
    "Last Login",
    "Status",
    "Last Update",
    "Action",
  ];

  const tableData = [
    {
      SubAdmin: "Deep v connect",
      Email: "Deep@vconnect.com",
      LastLogin: "2020-08-10 18:07:54",
      Status: true,
      LastUpdate: "2020-08-10 18:07:54",
      Action: "Edit",
    },
    {
      SubAdmin: "Manish v connect",
      Email: "shiva@gmail.com",
      LastLogin: "2020-08-10 18:07:54",
      Status: false,
      LastUpdate: "2020-08-10 18:07:54",
      Action: "Edit",
    },
    {
      SubAdmin: "ramesh v connect",
      Email: "manish@vconnect.com",
      LastLogin: "2020-08-10 18:07:54",
      Status: true,
      LastUpdate: "2020-08-10 18:07:54",
      Action: "Edit",
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
                <TableCell align="center">{item.SubAdmin}</TableCell>
                <TableCell align="center">{item.Email}</TableCell>
                <TableCell align="center">{item.LastLogin}</TableCell>
                <TableCell align="center">
                  {item.Status ? (
                    <button className="enable">Enable</button>
                  ) : (
                    <button className="disable">Disable</button>
                  )}
                </TableCell>
                <TableCell align="center">{item.LastUpdate}</TableCell>
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
          <HeaderComp name="Manage Sub Admin List" />
          <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
        </div>
     
    </>
  );
}

export default SubAdmin;
