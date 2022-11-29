import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import { VendorContractDetail, UpdateVendorPayment, GetVendorPayment, PendingVendorInvoice } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditVendorPayments() {
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState([])
    const [pendinginvoicelist, setPendinginvoicelist] = useState([])
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

            const datas = await GetVendorPayment(org,sessionStorage.getItem('vendorpaymentssno'))
            setData(datas[0])

            const invoice = await PendingVendorInvoice(org);
            setPendinginvoicelist(invoice)

            setLoading(true)
        }
        fetchdata();
    }, [])







    const handleAddVendorIvoice = async (e) => {
        e.preventDefault();
        setLoading(false)
        // let val2 = document.getElementById('invno');
        // let text = val2.options[val2.selectedIndex].text;
        // let toindex2 = text.indexOf(",")

        // const middletext = text.slice(toindex2 + 2)
        // const middle = middletext.slice(
        //     middletext.indexOf('(') + 1,
        //     middletext.lastIndexOf(')'),
        // );
        // const invno = middle;


        const paymentdetail = document.getElementById('paymentdetail').value;
        const paymentamt = document.getElementById('paymentamt').value;
        const paymentdate = document.getElementById('paymentdate').value;
        const remark = document.getElementById('remark').value;
        const sno = sessionStorage.getItem('vendorpaymentssno')
        const org = sessionStorage.getItem('Database')



        if (!paymentdetail || !paymentamt || !paymentdate) {
            setLoading(true)
            setDatas({ ...datas, message: "Please enter the Mandatory Field", title: "warning", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
            return false;
        }
        else {
            setLoading(true)

            const result = await UpdateVendorPayment(org,paymentdetail, paymentamt, paymentdate, remark, sno)
            if (result === 'Data Updated') {
                sessionStorage.removeItem('vendorpaymentssno')
                setDatas({ ...datas, message: "Vendor Payment Updated", title: "success", type: "success", route: "/TotalVendorPayment", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "#", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }



    }

    // const handleChnageVendorDetail = async (e) => {
    //     const val = e.target.value;
    //     const toindex = val.indexOf(",")
    //     const vebndconid = val.slice(0, toindex)
    //     const detail = await VendorContractDetail(vebndconid);
    //     document.getElementById('accountno').value = detail.customer_account_no;
    //     document.getElementById('refno').value = detail.reference_no;
    // }

    const handleChangeremarks = (e) => {
        setData({ ...data, payment_remark: e.target.value })
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
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Vendor Payment</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Vendor Payment</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { sessionStorage.removeItem('vendorpaymentssno'); window.location.href = '/TotalVendorPayment' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className=" card contract-div" style={{ width: "90%" }}>
                                <header className="card-header d-flex justify-content-between" >
                                    <h5 > Vendor Payment</h5>
                                </header>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>

                                        <div className="row">
                                            <div className="form-group col-md-4" >
                                                <label htmlFor='invno'>Invoice no <span className='text-danger'>*</span></label>
                                                <select type='text' id='invno' className='form-select m-0 invoice-inp'
                                                    // onChange={handleChnageVendorDetail} 
                                                    disabled>
                                                    <option value={[`${data.sno},${data.invoice_amt}`]} hidden>{`${data.reference_no}, (${data.invoice_no})`}</option>
                                                    {
                                                        pendinginvoicelist.map((item, index) =>
                                                            <option key={index} value={[`${item.sno},${item.invoice_amt}`]}>{`${item.reference_no}, (${item.invoice_no})`}</option>)
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='accountno'>Account no <span className='text-danger'>*</span></label>
                                                <input type="text" id='accountno' className="form-control" disabled defaultValue={data.account_no} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='paymentdetail'>Payment Details <span className='text-danger'>*</span> </label>
                                                <input type="text" className="form-control" id='paymentdetail' defaultValue={data.payment_detail} />
                                            </div>

                                        </div>

                                        <div className="row mt-3">
                                            <div className="form-group col-md-4">
                                                <label htmlFor='paymentamt'>Payment Amount <span className='text-danger'>*</span></label>
                                                <input type="number" id='paymentamt' className="form-control" defaultValue={data.payment_amt} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='paymentdate'>Payment date <span className='text-danger'>*</span></label>
                                                <input type="date" id='paymentdate' className="form-control" defaultValue={data.PaymentDate} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='refno'>Reference No <span className='text-danger'>*</span></label>
                                                <input type="text" id='refno' className="form-control" defaultValue={data.reference_no} disabled />
                                            </div>
                                        </div>

                                        <div className="form-group col-md-4 mt-3">
                                            <label htmlFor='remark'>Remarks</label>
                                            <textarea className="form-control" id='remark' rows='3' value={data.payment_remark} onChange={handleChangeremarks}></textarea>
                                        </div>

                                        <div className='btn_div mt-3'>
                                            <button className='btn btn-voilet' onClick={handleAddVendorIvoice}>Update Vendor Payment</button>
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

export default EditVendorPayments;