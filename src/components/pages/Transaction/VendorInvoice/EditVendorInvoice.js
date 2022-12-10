import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import './VendorInvoice.css'
import { ActiveVendorContract, VendorContractDetail, UpdatePendingVendorInvoice, GetVendorInvoice } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditVendorInvoice() {
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState([])
    const [vendorcontractlist, setVendorcontractlist] = useState([])
    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })
    useEffect(() => {
        const fetchdata = async () => {
            const org = sessionStorage.getItem('Database')

            const datas = await GetVendorInvoice(org,sessionStorage.getItem('vendorinvoicesno'))
            console.log(datas)
            setData(datas[0])

            const vendorcontract = await ActiveVendorContract(org);
            setVendorcontractlist(vendorcontract)
            setLoading(true)
        }
        fetchdata();
    }, [])







    const handleAddVendorIvoice = async (e) => {
        e.preventDefault();
       
        document.getElementById('subnitbtn').disabled = 'true'
        setLoading(false)
        let vendor = document.getElementById('vendor').value;
        const val = vendor;
        const toindex = val.indexOf(",")
        vendor = val.slice(toindex + 1)
        const accountno = document.getElementById('accountno').value;
        const invno = document.getElementById('invno').value;
        const invamt = document.getElementById('invamt').value;
        const invdate = document.getElementById('invdate').value;
        const invduedate = document.getElementById('invduedate').value;
        const invsubdate = document.getElementById('invsubdate').value;
        const remark = document.getElementById('remark').value;
        const refno = document.getElementById('refno').value;
        const printercount = document.getElementById('printercount').value;
        const sno = sessionStorage.getItem('vendorinvoicesno')
        const org = sessionStorage.getItem('Database')

        if (!vendor || !invamt || !invno ) {
            setLoading(true)
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter the Mandatory Field", title: "warning", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
            return false;
        }
        else {
            setLoading(true)
            const result = await UpdatePendingVendorInvoice(org, vendor,accountno,invno,invamt,invdate,invduedate,invsubdate,remark,refno,printercount,sno)
            if (result === 'Data Updated') {
                sessionStorage.removeItem('vendorinvoicesno')
                setDatas({ ...datas, message: "Invoice Updated", title: "success", type: "success", route: "/TotalVendorInvoice", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "#", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }



    }

    const handleChnageVendorDetail = async (e) => {
        const val = e.target.value;
        const org = sessionStorage.getItem('Database')

        const toindex = val.indexOf(",")
        const vebndconid = val.slice(0, toindex)
        const detail = await VendorContractDetail(org,vebndconid);
        document.getElementById('accountno').value = detail.customer_account_no;
        document.getElementById('refno').value = detail.reference_no;
        
    }

    const handleChangeremarks=(e)=>{
        setData({ ...data, remark: e.target.value })
    }

    return (
        <>
            {
                loading ?
                    <Sidebar>
                    <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Vendor Invoice</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Vendor Invoice</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { sessionStorage.removeItem('vendorinvoicesno');window.location.href = '/TotalVendorInvoice' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className=" card contract-div" style={{ width: "90%" }}>
                                <header className="card-header d-flex justify-content-between" >
                                    <h5 > Vendor Invoice</h5>
                                </header>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>

                                        <div className="row">
                                            <div className="form-group col-md-4" >
                                                <label htmlFor='vendor'>Vendor <span className='text-danger'>*</span></label>
                                                <select type='text' id='vendor' className='form-select m-0 invoice-inp' onChange={handleChnageVendorDetail}>
                                                    <option value={[`${data.sno},${data.vendor}`]} hidden>{data.vendor}</option>
                                                    {
                                                        vendorcontractlist.map((item, index) =>
                                                            <option key={index} value={[`${item.sno},${item.vendor}`]}>{`${item.vendor}, (${item.reference_no})`}</option>)
                                                    }

                                                </select>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='accountno'>Account no <span className='text-danger'>*</span></label>
                                                <input type="text" id='accountno' className="form-control" disabled defaultValue={data.account_no}/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='invno'>Invoice no <span className='text-danger'>*</span> </label>
                                                <input type="text" className="form-control" id='invno' defaultValue={data.invoice_no} />
                                            </div>

                                        </div>

                                        <div className="row mt-3">
                                            <div className="form-group col-md-4">
                                                <label htmlFor='invamt'>Invoice Amount <span className='text-danger'>*</span></label>
                                                <input type="text" id='invamt' className="form-control" defaultValue={data.invoice_amt} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='invdate'>Invoice date</label>
                                                <input type="date" id='invdate' className="form-control" defaultValue={data.Invoicedat} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='invduedate'>Invoice Due date</label>
                                                <input type="date" id='invduedate' className="form-control" defaultValue={data.InvoiceDuedate} />
                                            </div>

                                        </div>
                                        <div className="row mt-3">
                                            <div className="form-group col-md-4">
                                                <label htmlFor='invsubdate'>Invoice Sub Date</label>
                                                <input type="date" id='invsubdate' className="form-control" defaultValue={data.InvoiceSubdate} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='refno'>Reference No <span className='text-danger'>*</span></label>
                                                <input type="text" id='refno' className="form-control" defaultValue={data.reference_no} disabled/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='printercount'>Printer Counter</label>
                                                <input type="text" id='printercount' className="form-control" defaultValue={data.printer_counter} />
                                            </div>

                                        </div>
                                        <div className="form-group col-md-4 mt-3">
                                            <label htmlFor='remark'>Remarks</label>
                                            <textarea className="form-control" id='remark' rows='3' value={data.remark} onChange={handleChangeremarks}></textarea>
                                        </div>

                                        <div className='btn_div mt-3'>
                                            <button className='btn btn-voilet'  id='subnitbtn' onClick={handleAddVendorIvoice}>Update Vendor Invoice</button>
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

export default EditVendorInvoice;