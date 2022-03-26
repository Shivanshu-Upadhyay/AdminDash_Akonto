import React from "react";
import MainTable from "../AdminTable/MainTable";
import HeaderComp from "../AdminTable/HeaderComp";
function PGmodule() {
    const tableHeading = [
      "Type",
      "PG Name",
      "Mer.No",
    ];

    const tableData = [
      {
        tableHeading: "Deep v connect",
        Email: "Deep@vconnect.com",
        LastLogin: "2020-08-10 18:07:54",
       
      },
      
    ];
  return (
    <>
      <HeaderComp name='Manage Our Gate List' />

      <MainTable tableHeading={tableHeading} tableData={tableData} />
    </>
  );
}

export default PGmodule;
