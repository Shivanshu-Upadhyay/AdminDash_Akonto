import React from "react";
import "./css/business.css";
function Integrations() {
  return (
    <div className="container">
      <h4>Business Setting</h4>
      <div className="row mainInte">
        <h5>Integrations</h5>
        <p className="mt-3">
          By integrating with one or more third party services, you will be
          responsible for reviewing and understanding the terms and conditions
          associated with each third party service.
        </p>
        <p>
          Is there a third party service or integration you'd like to see? Let
          us know at
          <a href="mailto:sales@akontopay.com"> sales@akontopay.com</a>
        </p>
        <div className="intecontainer2">
          <div className="col-12 d-flex align-items-center borderbottominte">
            <img
              src="../../IMAGES/interight.svg"
              alt=""
              className="inteicon1"
            />
            <img src="../../IMAGES/inte.svg" alt="" className="inteicon2" />
            <div className="">
              <h6>HomeBase</h6>
              <p className="my-3">
                Employee scheduling, timesheets, and payroll for your employees.
              </p>
              <button className="intebtn">Learn More</button>
            </div>
          </div>

          <div className="col-12 d-flex align-items-center mt-4 ">
            <img
              src="../../IMAGES/interight.svg"
              alt=""
              className="inteicon1"
            />
            <img src="../../IMAGES/inte.svg" alt="" className="inteicon2" />
            <div className="">
              <h6>Intuit QuickBooks Online</h6>
              <p className="my-3">
                Sync your transaction to your Intuit QuickBooks Online.
              </p>
              <button className="intebtn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integrations;
