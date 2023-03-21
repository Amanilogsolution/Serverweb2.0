import React, { useEffect, useState, useContext } from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import { UpdateVendorPayment, GetVendorPayment, PendingVendorInvoice } from '../../../../api'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { RiArrowGoBackFill } from 'react-icons/ri'
import { GlobalAlertInfo } from '../../../../App';
import Modal from '../../AlertModal/Modal';

function EditVendorPayments() {
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState([])
    const [pendinginvoicelist, setPendinginvoicelist] = useState([])

    // ########################### Modal Alert #############################################
    const { tooglevalue, callfun } = useContext(GlobalAlertInfo)
    // ########################### Modal Alert #############################################

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')
            const datas = await GetVendorPayment(org, localStorage.getItem('vendorpaymentssno'))
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
        document.getElementById('subnitbtn').disabled = 'true'

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
        const sno = localStorage.getItem('vendorpaymentssno')
        const org = localStorage.getItem('Database')

        if (!paymentdetail || !paymentamt || !paymentdate) {
            setLoading(true)
            document.getElementById('subnitbtn').disabled = false
            callfun('Please enter the Mandatory Field', 'warning', 'self')
            return false;
        }
        else {
            const result = await UpdateVendorPayment(org, paymentdetail, paymentamt, paymentdate, remark, sno)
            setLoading(true)

            if (result === 'Data Updated') {
                localStorage.removeItem('vendorpaymentssno')
                callfun('Vendor Payment Updated', 'success', '/TotalVendorPayment')
            }
            else {
                callfun('Server Error', 'danger', 'self')
                document.getElementById('subnitbtn').disabled = false
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

    return (
        <>
            {
                loading ?
                    <Sidebar>
                        {/* ######################### Sanckbar Start ##################################### */}
                        <Modal
                            theme={tooglevalue.theme}
                            text={tooglevalue.message}
                            show={tooglevalue.modalshowval}
                            url={tooglevalue.url}
                        />
                        {/* ######################### Sanckbar End ##################################### */}

                        <div className='main_container'>
                            <div className=' main-inner-container d-flex justify-content-between  pt-4 pb-3'>
                                <h4><span className='page-type-head1'>Vendor Payment <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Vendor Payment</span> </h4>
                                <button className='btn btn-secondary btn ' onClick={() => { localStorage.removeItem('vendorpaymentssno'); window.location.href = '/TotalVendorPayment' }} >Back <RiArrowGoBackFill /></button>
                            </div>
                            <div className="bg-white shadow1-silver rounded15 mt-1 card inner-card pt-2">
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">
                                            <div className="form-group col-md-4">
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
                                                <label htmlFor='approvedamt'>Approved Amount </label>
                                                <input type="number" id='approvedamt' className="form-control" defaultValue={data.approved_payment_amt} disabled />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='paymentamt'>Payment Amount <span className='text-danger'>*</span></label>
                                                <input type="number" id='paymentamt' className="form-control" defaultValue={data.payment_amt} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='paymentdate'>Payment date <span className='text-danger'>*</span></label>
                                                <input type="date" id='paymentdate' className="form-control" defaultValue={data.PaymentDate} />
                                            </div>

                                        </div>
                                        <div className="row mt-3">
                                            <div className="form-group col-md-4">
                                                <label htmlFor='refno'>Reference No <span className='text-danger'>*</span></label>
                                                <input type="text" id='refno' className="form-control" defaultValue={data.reference_no} disabled />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor='remark'>Remarks</label>
                                                <textarea className="form-control" id='remark' rows='3' defaultValue={data.payment_remark}></textarea>
                                            </div>
                                        </div>
                                    </form>
                                </article>
                                <div className='btn_div mt-3 card-footer'>
                                    <button className='btn btn-voilet' id='subnitbtn' onClick={handleAddVendorIvoice}>Update Vendor Payment</button>
                                </div>
                            </div>
                        </div>
                    </Sidebar>
                    : <LoadingPage />
            }
        </>
    )
}

export default EditVendorPayments;