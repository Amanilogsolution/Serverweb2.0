import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetManufacturer, UpdateManufacturer } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'

function EditManufacturer() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetManufacturer(sessionStorage.getItem('manufacturersno'))
            setData(result[0]);
        }
        fetchdata()
    }, [])

    const handleUpdateManufacturer = async (e) => {
        e.preventDefault();
        const manufacturername = document.getElementById('manufacturername').value;
        const remark = document.getElementById('remark').value;

        const username = sessionStorage.getItem('UserName');
        const sno = sessionStorage.getItem('manufacturersno')

        if (!manufacturername) {
            alert('Please Enter Mandatory Field')
        }
        else {
            const result = await UpdateManufacturer(sno, manufacturername, remark, username);
            if (result === 'Updated') {
                alert('Data Updated')
                sessionStorage.removeItem('manufacturersno');
                window.location.href = './TotalManufacturer'
            }
            else {
                alert("Server Error");
            }
        }

    }


    const handlechangeManufacturerName = (e) => {
        setData({ ...data, manufacturer_name: e.target.value })
    }
    const handleChangeRemark = (e) => {
        setData({ ...data, manufacturer_description: e.target.value })
    }




    return (
        <>
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{ color: "rgb(123,108,200)" }}>Manufacturer</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Manufacturer</span> </h2>
                        <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('seriessno'); window.location.href = '/TotalManufacturer' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div" >

                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                <div className="form-group">
                                    <label htmlFor='manufacturername'>Manufacturer Name</label>
                                    <input type="text" className="form-control" id='manufacturername' value={data.manufacturer_name} onChange={handlechangeManufacturerName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='remark'>Remarks (Optional)</label>
                                    <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" value={data.manufacturer_description} onChange={handleChangeRemark} />
                                </div>
                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleUpdateManufacturer}>Update</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default EditManufacturer;