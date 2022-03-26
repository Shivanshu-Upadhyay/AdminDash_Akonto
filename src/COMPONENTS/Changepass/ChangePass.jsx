import React,{useState} from 'react'
import HeaderComp from "../AdminTable/HeaderComp";
function ChangePass() {
  const [type1,setType1]=useState("password")
  const [type2,setType2]=useState("password")
  const [type3,setType3]=useState("password")

  const changeType1 = () =>{
    setType1(preType => preType === "password" ? "text" : "password")
   
  }
  const changeType2 = () =>{
    setType2(preType => preType === "password" ? "text" : "password")
   
  }
  const changeType3 = () =>{
    setType3(preType => preType === "password" ? "text" : "password")
   
  }
  return (
    <div div className='restBody'>
      <HeaderComp name="Manage Akonto Chinese Bank List" />
      <div className="container">
        <form className="my-3">
          <div className="row">
            <div className="col-md-7 mb-4">
              <label className="form-label lablesize">Current Password</label>

              <div className="iconfix">
                <input
                  type={type1}
                  className="form-control"
                  placeholder="Current Password"
                />
                <img
                  src="../../IMAGES/passeye.svg"
                  alt=""
                  style={{ marginRight: "30px", cursor: "pointer" }}
                  className="eye"
                  onClick={changeType1}
                />
              </div>
            </div>
            <div className="col-md-7 mb-4">
              <label className="form-label lablesize">New Password</label>
              <div className="iconfix">
                <input
                  type={type2}
                  className="form-control"
                  placeholder="Current Password"
                />
                <img
                  src="../../IMAGES/passeye.svg"
                  alt=""
                  style={{ marginRight: "30px", cursor: "pointer" }}
                  className="eye"
                  onClick={changeType2}
                />
              </div>
            </div>
            <div className="col-md-7 mb-5">
              <label className="form-label lablesize">Confirm Password</label>
              <div className="iconfix">
                <input
                  type={type3}
                  className="form-control"
                  placeholder="Current Password"
                />
                <img
                  src="../../IMAGES/passeye.svg"
                  alt=""
                  style={{ marginRight: "30px", cursor: "pointer" }}
                  className="eye"
                  onClick={changeType3}
                />
              </div>
            </div>
          </div>

         

          <button className="saveSetting">Save Setting</button>
        </form>
      </div>
    </div>
  );
}

export default ChangePass