import React from "react";
import Navbar from "../Navbar/Navbar";
// import logo from "./logo.png";

export default function Dashboard() {
  return (
    <div>
 <Navbar/>
      <div className='row' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className="card mx-4 my-4 bg-secondary text-light " style={{width: "18rem"}}>
                
                <div className="card-body">
                    <h5 className="card-title" style={{backgroundColor:"silver",color:"black",borderRadius:'6px',padding:"0 6px"}}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
                </div>
            </div>
            <div className="card mx-4 my-4 bg-secondary text-light " style={{width: "18rem"}}>
                
                <div className="card-body">
                    <h5 className="card-title" style={{backgroundColor:"silver",color:"black",borderRadius:'6px',padding:"0 6px"}}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
                </div>
            </div>
            <div className="card mx-4 my-4 bg-secondary text-light  " style={{width: "18rem"}}>
                
                <div className="card-body">
                    <h5 className="card-title" style={{backgroundColor:"silver",color:"black",borderRadius:'6px',padding:"0 6px"}}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
                </div>
            </div>
            
            
            <div className="card mx-4 my-4 bg-secondary text-light " style={{width: "18rem"}}>
               
                <div className="card-body">
                    <h5 className="card-title" style={{backgroundColor:"silver",color:"black",borderRadius:'6px',padding:"0 6px"}}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
                </div>
            </div>
            </div>

      <div className="card text-center" >
        <div className="card-header bg-dark text-light">Featured</div>
        <div className="card-body bg-secondary">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        <div className="card-footer bg-dark text-light">2 days ago</div>
      </div>
    </div>
  );
}
