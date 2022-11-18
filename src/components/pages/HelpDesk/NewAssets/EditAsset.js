import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight, MdAddCircle } from 'react-icons/md'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { FaMinusCircle } from 'react-icons/fa'

import { ActiveAssetesType, ActiveVendorCode, ActiveManufacturer, ActiveLocation, ActiveAssetStatus, ActiveSoftware, ActiveEmployees, InsertNewAssets, CountNewAssets } from '../../../../api'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { GiLuger } from 'react-icons/gi';

const EditAsset = () => {


    return (
        <>
    
                    <Sidebar >
                      
                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Assets</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add New Assets</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalNewAssets' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "90%" }}>
                                <div className="card inner-card">
                                    <div className='card-header'>Edit Assets</div>
                                    <article className="card-body" >
                                        <form className='' autoComplete='off'>

                                            <ul>

                                                {/* #################### Device Detail  Box Start #####################*/}
                                                <li>
                                                    <div style={{ cursor: "pointer" }}  >
                                                        <span style={{ display: "flex" }} >
                                                            <div className="link_text ">
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div id='devicedivdetail'>
                                                        <div className="row mt-2">

                                                            <div className="col-md-4">
                                                                <label htmlFor='asset_type'>Asset Type <span className='text-danger'>*</span></label>
                                                                <select id='asset_type' className="form-select">
                                                                    <option value='' hidden>Select...</option>
                                                                </select>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <label htmlFor='assetetag'>Asset Tag <span className='text-danger'>*</span></label>
                                                                <input type="text" id='assetetag' className="form-control" placeholder='Auto generated' disabled />
                                                            </div>
                                                            <div className="col-md-4" id='softwarediv' style={{ display: "none" }}>
                                                                <label htmlFor='software'>Software <span className='text-danger'>*</span></label>
                                                                <select className="form-select" id='software'>
                                                                    <option value='' hidden>Select Software</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className='row mt-3'>
                                                            <div className="col-md-4">
                                                                <label htmlFor='serialno'>Serial No. <span className='text-danger'>*</span></label>
                                                                <input type="text" id='serialno' className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='location'>Location <span className='text-danger'>*</span></label>
                                                                <select className="form-select" id='location'>
                                                                    <option value='' hidden>Select...</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='manufacture'>Manufacture <span className='text-danger'>*</span></label>
                                                                <select className="form-select" id='manufacture'>
                                                                    <option value='' hidden>Select...</option>
                                                                    
                                                                </select>
                                                            </div>

                                                        </div>


                                                        <div className="row mt-3">
                                                            <div className="col-md-4">
                                                                <label htmlFor='model'>Model <span className='text-danger'>*</span></label>
                                                                <input type="text" id='model' className="form-control" required />
                                                            </div>

                                                            <div className="col-md-4">
                                                                <label htmlFor='assetstatus'>Asset Status <span className='text-danger'>*</span></label>
                                                                <select className="form-select" id='assetstatus'>
                                                                    <option value='' hidden>Select...</option>
                                                        

                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='description'>Description</label>
                                                                <input type="text" id='description' className="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </li>
                                                {/* #################### Device Detail  Box End #####################*/}

                                                {/* #################### Purchases Detail  Box Start ############### */}
                                                <li className='mt-3'>
                                                    <div style={{ cursor: "pointer" }}  >
                                                        <div className="icon" ></div>
                                                        <span style={{ display: "flex" }} >
                                                            <div className="link_text ">
                                                               
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div id='purchasesdivdetail' style={{ display: 'none' }}>
                                                        <div className="row mt-3">
                                                            <div className="col-md-4">
                                                                <label htmlFor='purchase_type'>Purchase Type <span className='text-danger'>*</span></label>
                                                                <select className="form-select" id='purchase_type'>
                                                                    <option value='' hidden>Select...</option>
                                                                    <option value='Rental' >Rental</option>
                                                                    <option value='Owned' >Owned</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='purchasesdate'>Purchase Date <span className='text-danger'>*</span></label>
                                                                <input type="date" id='purchasesdate' className="form-control" required />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-md-4">
                                                                <label htmlFor='company'>Company <span className='text-danger'>*</span></label>
                                                                <input type="text" id='company' className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='vendor'>Vendor <span className='text-danger'>*</span></label>
                                                                <select id='vendor' className="form-select">
                                                                    <option value='' hidden>Select...</option>
                                                
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='invoiceno'>Invoice No.<span className='text-danger'>*</span></label>
                                                                <input type="text" id='invoiceno' className="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* #################### Purchases Detail  Box End ############### */}
                                                {/* #################### Other Detail  Box Start ############### */}

                                                <li className='mt-3'>
                                                    <div style={{ cursor: "pointer" }}  >
                                                        <div className="icon" ></div>
                                                        <span style={{ display: "flex" }} >
                                                            <div className="link_text ">
                                          
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div id='otherdivdetail' style={{ display: 'none' }}>

                                                        <div className="row mt-3">
                                                            <div className="col-md-4" id='purchasespricediv' style={{ display: "none" }}>
                                                                <label htmlFor='purchaseprice'>Purchase Price <span className='text-danger'>*</span></label>
                                                                <input type="number" id='purchaseprice' className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4" id='rentpermonthdiv' style={{ display: "none" }}>
                                                                <label htmlFor='rentpermonth'>Rent Per Month <span className='text-danger'>*</span></label>
                                                                <input type="number" id='rentpermonth' className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='latestinventory'>Latest Inventory <span className='text-danger'>*</span></label>
                                                                <input type="text" id='latestinventory' className="form-control" required />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">

                                                            <div className="col-md-4">
                                                                <label htmlFor='assetname'>Asset Name<span className='text-danger'>*</span></label>
                                                                <input type="text" id='assetname' className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='assetassign'>Asset Assign <span className='text-danger'>*</span></label>
                                                                <select id='assetassign' className="form-select" >
                                                                    <option value={sessionStorage.getItem('UserId')} hidden>{sessionStorage.getItem('UserName')}</option>
                                                        
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mt-3">
                                                            <label htmlFor='remark'>Remarks </label>
                                                            <textarea id='remark' className="form-control" rows='3'></textarea>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* #################### Other Detail  Box End ############### */}

                                            </ul>
                                            <div className="form-group mt-3" >
                                                <button type="submit" className="btn btn-voilet " id="subnitbtn" >Add New Assets</button>&nbsp;&nbsp;
                                                <button type="reset" className="btn btn-secondary">Reset</button>
                                            </div>
                                        </form>
                                    </article>
                                </div>


                            </div>
                        </div>
                    </Sidebar>
        </>
    )
}

export default EditAsset;
