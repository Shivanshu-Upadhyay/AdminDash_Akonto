import React from 'react'

function HeaderComp({name}) {
  return (
    <>
      <div className="d-flex justify-content-between m-4">
        <h2>{name}</h2>
        <button className="addNew">+ Add New</button>
      </div>
    </>
  );
}

export default HeaderComp