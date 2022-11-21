import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './Dashboard.css'
import logo from '../../../image/drizzle_logo.jpg'
// import * as XLSX from "xlsx";
import {
  // UploadCountry
  // UploadCity
} from '../../../api'
import data from '../../Citylist';


const Dashboard = () => {
  // console.log(data)


  //   const onChange = (e) => {
  //     const [file] = e.target.files;
  //     const reader = new FileReader();

  //     reader.onload = (evt) => {
  //       const bstr = evt.target.result;
  //       const wb = XLSX.read(bstr, { type: "binary" });
  //       const wsname = wb.SheetNames[0];
  //       const ws = wb.Sheets[wsname];
  //       const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
  //       var lines = data.split("\n");
  //       var result = [];
  //       var headers = lines[0].split(",");
  //       for (var i = 1; i < lines.length - 1; i++) {
  //         var obj = {};
  //         var currentline = lines[i].split(",");
  //         for (var j = 0; j < headers.length; j++) {
  //           obj[headers[j]] = currentline[j];
  //         }
  //         result.push(obj);
  //       }
  //       console.log(result)
  //       const array = JSON.stringify(result)
  //       const datas = JSON.parse(array)
  //       console.log(datas)
  //       setImportdata(datas);

  //     };
  //     reader.readAsBinaryString(file);
  //   };

  // const upload=async(e)=>{
  //   e.preventDefault();
  //   await UploadCity(data)
  // }




  return (
    <div>
      <Sidebar>
        <div className='home_container'>
          <div className='home_content'>
            {/* <input type='file' onChange={onChange}/> */}
            {/* <button onClick={upload}>Upload</button> */}
            <img className='home_logo' src={logo} alt='Drizzle Logo'/>
            <h1>Hello from Us</h1>
            <p>
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
              and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by accident
            </p>
          </div>
        </div>
      </Sidebar>
    </div>

  );
};

export default Dashboard;