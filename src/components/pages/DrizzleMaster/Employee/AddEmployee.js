import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { AddEmployees, ActiveLocation } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';


function AddEmployee() {
    const [loading, setLoading] = useState(true)
    const [locationlist, setLocationlist] = useState([])
    const [numcount, setNumcount] = useState()

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle:"true",
    })

    useEffect(() => {
        const fetchdata = async () => {
            const org = sessionStorage.getItem('Database')

            const tablelocation = await ActiveLocation(org);
            setLocationlist(tablelocation)
        }
        fetchdata();

    }, [])

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)

        const employee_name = document.getElementById('employee_name').value;
        const employee_id = employee_name.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const employee_email = document.getElementById('employee_email').value;
        const employee_number = document.getElementById('employee_number').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;
        const username = sessionStorage.getItem('UserName');
        setLoading(true)

        if (!location || !employee_name || !employee_email) {
            alert("Please fill the mandatory field ...")
        }
        else {
            setLoading(true)
            const org = sessionStorage.getItem('Database')

            const result = await AddEmployees(org,employee_id, employee_name, location, employee_email, employee_number, company, username);
            if (result === 'Added') {
                setDatas({...datas,message:"Employee Added",title:"success",type:"success",route:"/TotalEmployee",toggle:"true"})
                document.getElementById('snackbar').style.display="block"
            }
            else if(result === 'Already'){
                setDatas({...datas,message:"Employee Already Exist",title:"warning",type:"Error",toggle:"true"})
                document.getElementById('snackbar').style.display="block" 
            }
            else {
                setDatas({...datas,message:"Server Error",title:"Error",type:"danger",route:"/AddEmployee",toggle:"true"})
                document.getElementById('snackbar').style.display="block"  
            }
        }

    }
    return (
        <>
            {
                loading ?
                    <Sidebar >

                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle}/>
                        </div>

                        <div className='main_container pb-2'  >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Employee</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Employee</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalEmployee' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div">
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">

                                            <div className="col-md-6" >
                                                <label htmlFor='company'>Company</label>
                                                <input type="text" className="form-control" id='company' />
                                            </div>
                                            <div className="col-md-6" >
                                                <label htmlFor='location'>Location <span className='text-danger'>*</span></label>
                                                <select className="form-select" id='location' required >
                                                    <option value='' hidden>Select Location</option>
                                                    {
                                                        locationlist.map((item, index) =>
                                                            <option key={index}>{item.location_name}</option>
                                                        )
                                                    }
                                                </select>
                                            </div>
                                           

                                        </div>
                                        <div className="row mt-2">
                                        <div className="col-md-6" >
                                                <label htmlFor='employee_name'>Employee Name <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='employee_name' />
                                            </div>
                                            <div className="col-md-6" >
                                                <label htmlFor='employee_email'>Employee Email <span className='text-danger'>*</span></label>
                                                <input type="email" className="form-control" id='employee_email' />
                                            </div>
                                          


                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-md-6" >
                                                <label htmlFor='employee_number'>Phone Number </label>
                                                <input type="number" className="form-control" id='employee_number' value={numcount}
                                                    onChange={(e) => { if (e.target.value.length === 11) return false; else { setNumcount(e.target.value) } }}
                                                />
                                            </div>
                                        </div>


                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Employee</button>&nbsp;
                                            <button type="reset" className="btn btn-secondary ">Reset</button>
                                        </div>
                                    </form>
                                </article>
                            </div>
                        </div>
                    </Sidebar>
                    : <LoadingPage />
            }
        </>
    )
}

export default AddEmployee;