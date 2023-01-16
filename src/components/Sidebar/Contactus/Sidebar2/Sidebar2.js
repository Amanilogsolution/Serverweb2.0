import React from "react";
import './sidebar2.css'
const Sidebar2 = (propes) => {
    return (
       <>
        <aside className={propes.sidebar2toggle?'sidebar2open sidebarcontainer2':'sidebar2close sidebarcontainer2'}>
        <p className="text-end px-4 mt-3 mx-4 " style={{fontSize:'30px'}} onClick={propes.togglesidebar2}>
        <span className="cursor-pointer">&#215;</span></p>
        <h3>Sidebar2</h3>

        </aside>
       </>
    )
}

export default Sidebar2;