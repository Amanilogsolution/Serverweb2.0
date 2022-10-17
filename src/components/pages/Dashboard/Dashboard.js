import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div>
            <Sidebar>
                <div className='main_container'>
                    <h1 >Welcome to Drizzle</h1>
                </div>
            </Sidebar>
        </div>

    );
};

export default Dashboard;