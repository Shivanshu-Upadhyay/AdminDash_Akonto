import React from 'react'
import "./css/business.css";
function BusinessProfile() {
  return (
    <>
      <div className="container">
        <h4>Business Setting</h4>
        <form action="">
          <h5> Recipt Setting</h5>
          <div className="row">
            <div className="col-12">
              <p className="mt-3">
                You must verify your identify before editing your business
                profile.
              </p>
              <a href="a">
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  style={{ width: "10px" }}
                />
                <b> Edit Business Profile</b>
              </a>
              <h6 className="mt-2">Business Details</h6>
              <div>
                <p>
                  Marchant No:15 <br />
                  Secret key 30a38fe
                </p>
                
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 mb-3">
              <label className="form-label">Business Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Business Name"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Business Location</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Business Location"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Business currencies required</label>
              <input
                type="text"
                className="form-control placeblack"
                placeholder=" INR"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Job title</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Job title"
              />
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label">Website</label>
              <input
                type="url"
                className="form-control"
                placeholder=" Website"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Country</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Country"
              />
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
              <label className="form-label">City</label>
              <input type="text" className="form-control" placeholder=" City" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Zip</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Zip"
              />
            </div>
            <div className="col-md-4 mb-5">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Phone Number"
              />
            </div>
            <div className="col-md-4 mb-5">
              <label className="form-label">Business Fax</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Business Fax"
              />
            </div>
            <div className="col-md-6 mb-5">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Phone Number"
              />
            </div>
            <div className="col-md-6 mb-5">
              <label className="form-label">Website</label>
              <input
                type="url"
                className="form-control"
                placeholder=" Website"
              />
            </div>
            <div className=" col-md-6form-check form-switch padiing mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
              />
              <label className="form-check-label px-1">
                I have a seperate corporate address
              </label>
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label">Corporate Location</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Corporate Location"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Country</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Country"
              />
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
              <label className="form-label">City</label>
              <input type="text" className="form-control" placeholder=" City" />
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
          <button className="saveSetting">Save Setting</button>
        </form>
      </div>
    </>
  );
}

export default BusinessProfile