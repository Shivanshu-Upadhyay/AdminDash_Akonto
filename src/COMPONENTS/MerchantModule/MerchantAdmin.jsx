import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeaderComp from "../AdminTable/HeaderComp";
import MainTable from "../AdminTable/MainTable";
import { Form } from "react-bootstrap";
function MerchantAdmin() {
  const tableHeading = [
    "Password",
    "Wallet",
    "Payin chrg",
    "Payout chrg",
    "Cash Payout chrg",
    "Crypto Payout chrg",
    "Rolling reverse chrg",
    "Merchants Number",
    "Name",
    "Secret Key",
    "Secret IV",
    "Settle",
    "CARD",
    "UPI",
    "NetBanking",
    "Wallet",
    "Payout Gateway",
    "Status",
    "Web Payment",
    "Action",
    "Created",
    "Image",
  ];

  const tableData = [
    {
      Password: true,
      Wallet: "0.00",
      Payinchrg: "3.00%",
      Payoutchrg: "3.00%",
      CashPayoutchrg: "3.00%",
      CryptoPayoutchrg: "3.00%",
      Rollingreversechrg: "10.00%",
      MerchantsNumber: 2316,
      Name: "Rohit Malhotra",
      SecretKey: "282cb5c",
      SecretIV: "icon",
      Settle: "INR",
      Status: false,
      WebPayment: true,
      Created: "23 May 2020",
      Image:true
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
                <TableCell align="center">
                  {item.Password ? (
                    <button className="enable">Send</button>
                  ) : (
                    <button className="disable">Resend</button>
                  )}
                </TableCell>
                <TableCell align="center">{item.Wallet}</TableCell>
                <TableCell align="center">{item.Payinchrg}</TableCell>
                <TableCell align="center">{item.Payoutchrg}</TableCell>
                <TableCell align="center">{item.CashPayoutchrg}</TableCell>
                <TableCell align="center">{item.CryptoPayoutchrg}</TableCell>
                <TableCell align="center">{item.Rollingreversechrg}</TableCell>
                <TableCell align="center">{item.MerchantsNumber}</TableCell>
                <TableCell align="center">{item.Name}</TableCell>
                <TableCell align="center">{item.SecretKey}</TableCell>
                <TableCell align="center">{item.SecretIV}</TableCell>
                <TableCell align="center">{item.Settle}</TableCell>
                <TableCell align="center">
                  <Form.Select
                    aria-label="Default select example "
                    className="mb-3"
                  >
                    <option>Please Select</option>
                    <option value="1">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example 3"
                    className="mb-3"
                  >
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="1">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </option>
                  </Form.Select>
                  <Form.Select aria-label="Default select example">
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="1">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </option>
                    <option value="3">Three</option>
                  </Form.Select>
                </TableCell>
                <TableCell align="center">
                  <Form.Select
                    aria-label="Default select example "
                    className="mb-3"
                  >
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example 3"
                    className="mb-3"
                  >
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="1">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select aria-label="Default select example">
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </TableCell>
                <TableCell align="center">
                  <Form.Select
                    aria-label="Default select example "
                    className="mb-3"
                  >
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example 3"
                    className="mb-3"
                  >
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="1">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select aria-label="Default select example">
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </TableCell>
                <TableCell align="center">
                  <Form.Select
                    aria-label="Default select example "
                    className="mb-3"
                  >
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example 3"
                    className="mb-3"
                  >
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="1">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Select aria-label="Default select example">
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </TableCell>
                <TableCell align="center">
                  <Form.Select
                    aria-label="Default select example "
                    className="mb-3"
                  >
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </TableCell>
                <TableCell align="center">
                  {item.Status ? (
                    <button className="enable">Enale</button>
                  ) : (
                    <button className="disable">Disable</button>
                  )}
                </TableCell>
                <TableCell align="center">
                  {item.WebPayment ? (
                    <button className="enable">Enale</button>
                  ) : (
                    <button className="disable">Disable</button>
                  )}
                </TableCell>

                <TableCell>
                  <div className="d-flex  align-items-center justify-content-around">
                    <button>
                      <img
                        src="../../IMAGES/eye.svg"
                        alt="not"
                        style={{ width: "15px" }}
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
                <TableCell align="center">{item.Created}</TableCell>
                <TableCell align="center">
                  {item.Image ? (
                    <img src="../../IMAGES/atmblue.jpg" alt="error" style={{width:"130px",height:"130px"}}/>
                  ) : (
                    "Not found"
                  )}
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
      <HeaderComp name="Manage Merchants  List" />
      <MainTable tableHeading={tableHeading} TableBodyCom={TableBodyCom} />
      </div>
    </>
  );
}

export default MerchantAdmin;





