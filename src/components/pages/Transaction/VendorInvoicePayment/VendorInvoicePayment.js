import React, { useState } from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import './VendorInvoicePayment.css'


export default function VendorInvoicePayment() {

    return (
        <>
            <Sidebar>
                <div className='Vendor_invoice_payment'>
                    <div className='my-3 card d-flex justify-content-center'>
                        <div className='row '>
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
                            <div class="col-sm-2 mb-3">
                                <label for="validationCustom05">Zip Code</label>
                                <input type="text" class="form-control" required />

                            </div>
                            <div class="col-sm-2 mb-3">
                                <label for="validationCustom05">Zip Code</label>
                                <input type="text" class="form-control" required />

                            </div>
                            <div class="col-sm-2 mb-3">
                             
                            <div className='btn_div mt-4'>
                            <button className='btn btn-primary'>Add</button>
                            <button className='btn btn-secondary mx-2'>Cancel</button>
                        </div>
                            </div>

                        </div>
                        
                    </div>
                    
                    


                </div>
            </Sidebar>
        </>
    )
}