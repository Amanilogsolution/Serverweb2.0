import React from 'react'
import { MdDangerous } from 'react-icons/md';

export default function UpdateModel() {

   const cut=()=>{
     document.getElementById("updateModal").style.display="none"
   }

    return (
        <div id="updateModal" class="alert alert-danger alert-dismissible fade show" role="alert" style={{height:"45px"}}>
            <div style={{margin:"-8px 0 0 0"}}>
            <MdDangerous style={{fontSize:"26px",marginRight:"5px"}}/>
            <strong>Hey User!</strong> Your plane has Expired. Update your plane immediately to continue
            <button onClick={cut} style={{margin:"-8px 0 0 0"}} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
