import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './Dashboard.css'
import logo from '../../../image/drizzle_logo.jpg'

const Dashboard = () => {
    return (
        <div>
            <Sidebar>
                <div className='home_container'>
                 <div className='home_content'>
                    <img className='home_logo' src={logo}/>
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