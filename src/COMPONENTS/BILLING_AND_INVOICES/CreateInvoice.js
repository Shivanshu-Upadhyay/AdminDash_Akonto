import React,{useState} from 'react'
import "./createinvoice.css"
function CreateInvoice() {
    const[type,SetType]= useState("text")
  return (
    <>
      <div className="container maincontainer">
        <h4>New Invoice</h4>
        <form className="container ">
          <h5>Purchase Details</h5>
          <div className="row">
            <div className="col-md-6 my-md-0 my-3">
              <label className="form-label"> Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="  Amount"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Invoice No</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Invoice No"
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea className="form-control" placeholder="Description" />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-4">
              <label className="form-label">Currency</label>
              <select
                className="form-select pymentSent"
                aria-label="Default select example"
              >
                <option className="pymentSent">INR</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-md-4 d-md-flex justify-content-md-center align-items-md-end">
              <div>
                <input type="radio" className="mx-2 my-md-0 my-3" />
                <label className="form-label ">Taxable</label>
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label">Tax Rate (0.00%)</label>
              <input type="number" className="form-control" placeholder="0" />
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-6 my-md-0 my-3">
              <label className="form-label">Customer First Name</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Customer First Name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Customer Last Name</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Customer Last Name"
              />
            </div>
          </div>
          <div className="row my-4">
            <h5 className="">Customer</h5>
            <div className="col-md-6 my-md-0 my-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=" First Name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Last Name"
              />
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-6 my-md-0 my-3">
              <label className="form-label">Email ID</label>
              <input
                type="email"
                className="form-control"
                placeholder=" Email ID"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Send</label>
              <input
                type={type}
                className="form-control"
                placeholder=" 22/09/2020"
                onFocus={() => {
                  SetType("date");
                }}
              />
            </div>

            <div className="col-md-6 my-4">
              <label className="form-label">Due Date</label>
              <input
                type={type}
                className="form-control"
                placeholder=" DD/MM/YYYY"
                onFocus={() => {
                  SetType("date");
                }}
              />
            </div>
          </div>

          <div className="row my-4">
            <div className="col-xl-9 col-10 row justify-content-md-between ">
              <div className="col-md-3 ">
                <button className="cancel">Cancel</button>
              </div>
              <div className="col-md-3 my-md-0 my-3 ">
                <button className="draft">Save Draft</button>
              </div>
              <div className="col-md-3">
                <button className="sendInvoice">Process Payment</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateInvoice