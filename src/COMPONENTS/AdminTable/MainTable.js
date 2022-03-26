import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./css/mainTable.css";
const MainTable = ({ tableHeading,TableBodyCom  }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeading.map((item, index) => {
              return (
                <TableCell key={index} align="center">
                  <b> {item}</b>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBodyCom />
      </Table>
    </TableContainer>
  );
};

export default MainTable;
