import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";
function Contact() {
  const tableHeading = ["Name", "Email", "Mobile", "Message", "Date", "Action"];

  const tableData = [
    {
      Name: "Jamesjob",
      Email: "umm_3muhammad@yahoo.co.th",
      Mobile: "86829177366",
      Message:
        "Pictoa Filles Sexy Pour La Nuit Dans Votre Ville Etats-Unis: http://xurl.es/xp1ld",
      Date: "2019-06-19 14:17:11",
      Action: "IN_487540913471",
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
                <TableCell align="center">{item.Name}</TableCell>
                <TableCell align="center">{item.Email}</TableCell>
                <TableCell align="center">{item.Mobile}</TableCell>
                <TableCell align="center">{item.Message}</TableCell>
                <TableCell align="center">{item.Date}</TableCell>
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
        <HeaderComp name="Manage Call Request List" />
        <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}

export default Contact;
