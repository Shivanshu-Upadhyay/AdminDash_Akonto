import React, { useState } from "react";
import "./css/business.css";
function ReceiptSetting() {
  const [type, SetType] = useState("text");
//   const [checked, Setchecked] = useState(true);
  return (
    <>
      <div className="container">
        <h4>Business Setting</h4>
        <form>
          <div className="row">
            <h5> Recipt Setting</h5>
            <div className="col-12">
              <p>
                Customize the receipts that your customers receives after a
                sale. These settings apply to receipts for Payanywhere, Virtual
                Terminal, and Invoice transactions.
              </p>
              <div className="mb-3">
                <label className="form-label">Logo</label>
                <input
                  type={type}
                  className="form-control file"
                  placeholder="Upload a Logo"
                  onFocus={() => {
                    SetType("file");
                  }}
                  style={{ width: "30vh" }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Bussiness Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bussiness Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street Address"
                />
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-md-4 mb-3">
              <label className="form-label">City</label>
              <input type="text" className="form-control" placeholder=" City" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                placeholder=" State"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Zip</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Zip"
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Phone Number"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Website</label>
              <input
                type="url"
                className="form-control"
                placeholder=" http://www.example.com"
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 mb-3">
              <label className="form-label">Email ID</label>
              <input
                type="email"
                className="form-control"
                placeholder=" Email Id"
              />
            </div>
            <div className="form-check form-switch padiing mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                
              />
              <label className="form-check-label">BCC Email Receipts</label>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 mb-3">
              <label className="form-label">Enter BCC Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder=" Phone Number"
              />
            </div>
            <div className="form-check form-switch padiing mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                
              />
              <label className="form-check-label">Display Sold By</label>
            </div>
            <div className="form-check form-switch padiing mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                
              />
              <label className="form-check-label">
                Display Social Media Buttons
              </label>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 mb-3">
              <label className="form-label">Facebook User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Facebook User Name"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Facebook Link</label>
              <input
                type="url"
                className="form-control"
                placeholder=" Facebook Link"
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 mb-3">
              <label className="form-label">Twitter User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Twitter User Name"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Twitter Link</label>
              <input
                type="url"
                className="form-control"
                placeholder=" Twitter Link"
              />
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label">Enter Custom Message</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Enter Custom Message"
              />
            </div>
          </div>
          <button className="saveSetting">Save Setting</button>
        </form>
      </div>
    </>
  );
}

export default ReceiptSetting;
