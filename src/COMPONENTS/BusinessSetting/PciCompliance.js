import React from "react";
import "./css/business.css";
function PciCompliance() {
  return (
    <>
      <div className="container">
        <h4>Business Setting</h4>
        <div className="row mainpci">
          <h5>PCI Compliance</h5>
          <div className="col-12">
            <p className="mt-4 firstblock ">
              Our PCI Plus program makes adhering to the Payment Card Industry
              Data Security Standard (PCI DSS) easy. To help ensure the security
              of cardholder data, compliance with PCs DSS is required for all
              merchants.
            </p>
            <div className="fistpara">
              <img
                src="../../IMAGES/clock.svg"
                alt="not found"
                style={{ width: "20px" }}
                className="mx-1"
              />
              Your PCI Compliance Status is Pending.
            </div>
            <div className="my-4">
              <a href="d" className="down ">
                Download PCI Plus Training and Information Security Policy.
              </a>
            </div>
            <div>
              <div className="pendingtext">
                <img
                  src="../../IMAGES/calender.svg"
                  alt=""
                  style={{ width: "20px" }}
                  className="mx-1"
                />
                Your PCI Compliance Status is Pending.
                <img
                  src="../../IMAGES/download.svg"
                  alt=""
                  style={{ width: "20px" }}
                  className="mx-1"
                />
              </div>

              <div className="py-2 pendingtext">
                <img
                  src="../../IMAGES/calender.svg"
                  alt=""
                  style={{ width: "20px" }}
                  className="mx-1"
                />
                Your PCI Compliance Status is Pending
                <img
                  src="../../IMAGES/download.svg"
                  alt=""
                  style={{ width: "20px" }}
                  className="mx-2"
                />
              </div>
            </div>

            <div className="py-3 lastblock">
              If you need to edit any of the information, have allready
              completed offline documents to validate PCI compliance within the
              last 12 months, or have SAQ or scan status question, please
              contact the Compliance department at
              <a href="mailto:sales@akontopay.com"> sales@akontopay.com</a>
            </div>
            <div className="lastblock">
              Learn more about PCI Compliance <a href="ff">Here</a> .
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PciCompliance;
