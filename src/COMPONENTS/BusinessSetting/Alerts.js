import React from 'react'
import "./css/business.css"
function Alerts() {
  return (
    <>
      <div className="container">
        <h4>Business Setting</h4>
        <form action="">
          <div className="row">
            <h5>Alerts</h5>
            <p className="py-3 firstblock">
              Receive email alerts about your account activity.
            </p>
            <p className="basic">Basic Email Alerts</p>
            <div className="form-check form-switch padiing mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
              />
              <label className="form-check-label">
                Daily batch activity summary
              </label>
            </div>
            <div className="mt-3 basic">Custom Email Alerts</div>
            <div className="form-check form-switch padiing my-3 col-md-6">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
              />
              <label className="form-check-label">
                Display Social Media Buttons
              </label>
            </div>
            <div className="col-md-5 my-3">
              <input type="text" className="form-control" placeholder=" 0" />
            </div>
            <div className="form-check form-switch padiing my-3 col-md-6">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
              />
              <label className="form-check-label">
                Display Social Media Buttons
              </label>
            </div>
            <div className="col-md-5 my-3">
              <input type="text" className="form-control" placeholder=" 0" />
            </div>
            <div className="form-check form-switch padiing my-3 col-md-6">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
              />
              <label className="form-check-label">
                Display Social Media Buttons
              </label>
            </div>
            <div className="col-md-5 my-3">
              <input type="text" className="form-control" placeholder=" 0" />
            </div>
          </div>
          <button className="saveSetting">Save Setting</button>
        </form>
      </div>
    </>
  );
}

export default Alerts