import { AddOperatingsystem, ActiveSeries, TotalCount } from '../../../../api'
import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Sidebar/Sidebar';


function AddOperatingSystem() {
    const [operatingsystemid, setOperatingSystemID] = useState()

    useEffect(() => {
        const fetchdata = async () => {

            const series = await ActiveSeries()
            if (!series) {
                alert('Please add/active  the Series')
            }
            const ser = series.os_id
            const count = await TotalCount('tbl_operating_system')
            let countincrement = count.count + 1;
            let countnum = '' + countincrement;
            setOperatingSystemID(ser + countnum)
        }
        fetchdata();
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        // document.getElementById('subnitbtn').disabled=true;
        const operatingsystem = document.getElementById('operatingsystem').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if (!operatingsystem) {
            alert("Please enter the mandatory Field")
        }
        else {
            const result = await AddOperatingsystem(operatingsystemid, operatingsystem, remark, username);
            if (result === 'Added') {
                alert("Added")
                window.location.href = '/TotalOperatingSystem'
            }
            else if (result === 'Already') {
                alert('Data already Exist');
            }
            else {
                alert("Server Error");
            }

        }
    }
    return (
        <>
            <Sidebar>
                <div className='main_container' >
                    <div className="card card-div">
                        <header className="card-header" >
                            <h4 className=" mt-2 text-center" >Add Operating System</h4>
                        </header>
                        <article className="card-body" >
                            <form style={{ margin: "0px 20px 0px 15px" }}>
                                <div className="form-group">
                                    <label htmlFor='ossystemid'>Operating System ID </label>
                                    <input type="text" className="form-control" id='ossystemid' disabled value={operatingsystemid} />
                                </div>
                                <div className="form-group " >
                                    <label htmlFor='operatingsystem'>Operating System</label>
                                    <input type="text" className="form-control" id='operatingsystem' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='remark'>Remarks (Optional)</label>
                                    <textarea className="form-control" placeholder="Comments" id='remark' rows="3" />
                                </div>
                                <div className="form-group" >
                                    <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                    <button type="reset" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                    <button type="button" onClick={() => { window.location.href = '/TotalOperatingSystem' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default AddOperatingSystem;