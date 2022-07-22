import React, { useEffect } from "react";
import './dashboard.css'
import Navbar from "../Navbar/Navbar";
import {ActiveSeries} from '../../api'

export default function Dashboard() {

  useEffect(()=>{
   const  fetchdata=async()=>{
    const series= await ActiveSeries();
    if(!series && sessionStorage.getItem('Permission') === 'allow'){
      alert ("Please start the series master");
      window.location.href='/Addseries'
    }
    }

    fetchdata();
  })
  return (
    <div >
      <Navbar />
     
      <div className=' dashboard-div' >
        {/* <div className="card mx-4 my-4 bg-secondary text-light card-div" >

          <div className="card-body">
            <h5 className="card-title" >Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
          </div>
        </div>
        <div className="card mx-4 my-4 bg-secondary text-light card-div" >

          <div className="card-body">
            <h5 className="card-title" >Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
          </div>
        </div>
        <div className="card mx-4 my-4 bg-secondary text-light card-div " >

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
          </div>
        </div>


        <div className="card mx-4 my-4 bg-secondary text-light card-div">

          <div className="card-body">
            <h5 className="card-title" >Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
          </div>
        </div>*/}
      </div> 

      {/* <Footer /> */}
    </div>
  );
}
