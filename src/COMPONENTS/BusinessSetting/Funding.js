import React from 'react'
import './css/business.css'
function Funding() {
  return (
    <>
      <div className="container">
        <h4>Business Setting</h4>
        <form action="">
          <div className="row fundingMain">
            <h5>Funding</h5>
            <p className="py-3 firstblock">
              You must verify your identify before editing your business
              profile.
            </p>
            <a href="gg" className="atag">
              Chargeback Bank Account{" "}
              <img src="../../IMAGES/iicon.svg" alt="" />
            </a>
            <br /> 
            <br />

            <div className="col-md-6 mb-3">
              <label className="form-label">Account Holder</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Account Holder"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Bank Account</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Bank Account"
              />
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label">Bank Routing/Swift/IFSC</label>
              <input
                type="text"
                className="form-control placeblack"
                placeholder=" Bank Routing/Swift/IFSC"
                
              />
            </div>
          </div>
          <button className="saveSetting">Save Setting</button>
        </form>
      </div>
    </>
  );
}

export default Funding