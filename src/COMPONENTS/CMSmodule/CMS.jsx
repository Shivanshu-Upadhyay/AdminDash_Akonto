import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";
function CMS() {
  const tableHeading = [
    "Page Title",
    "Created On",
    "Updated On",
    
    "Action",
  ];

  const tableData = [
    {
      PageTitle: "Term & condition",
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
                <TableCell align="center">{item.PageTitle}</TableCell>
                <TableCell align="center">{item.CreatedOn}</TableCell>
                <TableCell align="center">{item.UpdatedOn}</TableCell>
                
                <TableCell align="center">
                  <div className="d-flex  align-items-center justify-content-around">
                    <button>
                      <img
                        src="../../IMAGES/eye.svg"
                        alt="not"
                        style={{ width: "25px" }}
                      />
                    </button>

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

export default CMS;
