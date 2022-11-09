import React, { useState } from 'react'
import Sidebar from '../../../../Sidebar/Sidebar'
import './VendorInvoice.css'


export default function VendorInvoice() {

    return (
        <>
            <Sidebar>
                <div className='Vendor_invoice'>
                    <div className='my-3 card d-flex justify-content-center'>
                        <div className='row'>
                            <div class="col-sm-2 mb-3">
                                <label for="validationCustom05">Email</label>
                                <input type="text" class="form-control" required />

                            </div>
                            <div class="col-sm-2 mb-3">
                                <label for="validationCustom05">Customer ID</label>
                                <input type="text" class="form-control" required />
                            </div>
                            <div class="col-sm-2 mb-3">
                                <label for="validationCustom05">Vendor Category</label>
                                <input type="text" class="form-control" required />

                            </div>
                            <div class="col-sm-2 mb-3">
                                <label for="validationCustom05">Company Name</label>
                                <input type="text" class="form-control" required />
                            </div>
                            <div class="col-sm-2 mb-3">
                                <label for="validationCustom05">Zip Code</label>
                                <input type="text" class="form-control" required />

                            </div>

                        </div>

                        <div className='row row2'>
                            <div class="col-sm-2 mb-3">
                                <label for="validationCustom05">Country</label>
                                <input type="text" class="form-control" required />
                            </div>

                            <div class="col-sm-2 mb-3">
                                <label for="validationCustom05">State</label>
                                <input type="text" class="form-control" required />
                            </div>
                            <div class="col-sm-2 mb-3">
                                <label for="validationCustom05">Asset Type</label>
                                <input type="text" class="form-control" required />

                            </div>
                            <div class="col-sm-2 mb-3">
                                <label for="validationCustom05">Working</label>
                                <input type="text" class="form-control" required />

                            </div>
                            <div class="col-sm-2 mb-3">
                                <label for="validationCustom05">City</label>
                                <input type="text" class="form-control" required />

                            </div>
                        </div>
                        <div className='btn_div '>
                            <button className='btn btn-primary'>Add</button>
                            <button className='btn btn-secondary mx-2'>Cancel</button>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}
