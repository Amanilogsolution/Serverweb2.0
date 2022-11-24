import React, { useState } from "react";

import "./Snackbar.css";
import {GrFormClose} from "react-icons/gr"

export default function Snackbar(props) {
  const [toggleclass, setToggleclass] = useState(true);

  // const messageTitle = ["info", "success", "warning", "danger"];


  return (
    <div className="App">
      <div className={`${toggleclass ? "received" : ""} notification`}>
        <div className={`notification__message message--${props.type}`}>
          <h1>{props.title}</h1>
          <p>{props.message}</p>

          <button
            onClick={() => {
              setToggleclass(false);
              window.location.href = props.Route

            }}
          >
           <GrFormClose/>
          </button>
        </div>
      </div>


    </div>
  );
}
