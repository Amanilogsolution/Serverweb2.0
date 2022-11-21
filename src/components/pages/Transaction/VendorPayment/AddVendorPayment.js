import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import './VendorPayment.css'
import { PendingVendorInvoice, UpdateVendorInvoice } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Select from 'react-select';

function AddVendorPayment() {
    const [loading, setLoading] = useState(false)

    const [todatdate, setTodaydate] = useState('')
    const [count, setCount] = useState(0);
    const [arry, setArry] = useState([0]);
    const [arryval, setArryval] = useState([{}]);
    const [pendinginvoicelist, setPendinginvoicelist] = useState([])
    // const [vendordetail, setVendordetail] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const invoice = await PendingVendorInvoice();
            setPendinginvoicelist(invoice)
            todaydate()
            setLoading(true)
        }
        fetchdata();
    }, [])

    const todaydate = () => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        let today = year + "-" + month + "-" + day;
        setTodaydate(today)
    }

    const addRow = () => {
        let val = count + 1;
        setCount(val);
        setArry([...arry, val]);
    };

    const RemoveRow = () => {
        if (!(count === 1)) {
            let val = [...arry];
            val.pop();
            setCount(val.length);
            setArry(val);

            let objval=[...arryval] ;
            objval.pop();
            setArryval(objval)
        }
    };

    const savatoarry = (index) => {
        let val2 = document.getElementById(`invno-${index}`);
        let text = val2.options[val2.selectedIndex].text;
        let toindex2 = text.indexOf(",")

        const middletext = text.slice(toindex2 + 2)
        const middle = middletext.slice(
            middletext.indexOf('(') + 1,
            middletext.lastIndexOf(')'),
        );
        const invno = middle;
        let snotext = document.getElementById(`invno-${index}`).value;
        let snoindex = snotext.indexOf(",")
        let sno = snotext.slice(0, snoindex)


        const ptydtl = document.getElementById(`ptydtl-${index}`).value;
        const ptyamt = document.getElementById(`ptyamt-${index}`).value;
        const ptydate = document.getElementById(`ptydate-${index}`).value;
        const remark = document.getElementById(`remark-${index}`).value;

        let obj = {
            sno: sno, InvoiceNo: invno, paymentDetail: ptydtl, PaymentAmt: ptyamt,
            Paymentdate: ptydate, Remark: remark
        };

        arryval[index] = obj;

    };

    const handleAddVendorIvoice = async (e) => {
        e.preventDefault();

        setLoading(false)
        let errorcount = 0;
        for (let i = 0; i < arryval.length; i++) {
            if (!arryval[i]) {
                alert('Please Select the Invoice no')
                setLoading(true)
                errorcount = errorcount + 1;
                return false;

            }
            else if (!arryval[i].paymentDetail || !arryval[i].PaymentAmt) {
                alert('Please enter the Mandatory field')
                setLoading(true)
                errorcount = errorcount + 1;
                return false;
            }
            else if (arryval[i].InvoiceNo === 'elect Invoice n') {
                alert('Please Select the Invoice no')
                setLoading(true)
                errorcount = errorcount + 1;
                return false;
            }
        }
        if (errorcount === 0) {

            const result = await UpdateVendorInvoice(arryval, sessionStorage.getItem('UserId'))
            if (result === 'Data Updated') {
                alert('Data Updated')
                window.location.href='./TotalVendorPayment';
            }
            else {
                alert('Server Not Response')
                setLoading(true)
            }

        }

    }

    const handleChnageVendorDetail = async (index, e) => {
        const val = e;
        const toindex = val.indexOf(",")
        const vebndconid = val.slice(0, toindex)
        document.getElementById(`invamt-${index}`).value = val.slice(toindex + 1)

        let val2 = document.getElementById(`invno-${index}`);
        let text = val2.options[val2.selectedIndex].text;
        let toindex2 = text.indexOf(",")
        let refno = text.slice(0, toindex2)
        document.getElementById(`refno-${index}`).value = refno;

    }

    // let options = pendinginvoicelist.map((item) => {
    //     return { value: [`${item.sno},${item.invoice_amt}`], label: `${item.reference_no}, (${item.invoice_no})` };
    // })

    return (
        <>
            {
                loading ?
                    <Sidebar>
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Vendor Payment</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Vendor Payment</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalVendorPayment' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className=" card contract-div" style={{ width: "98%" }}>
                                <header className="card-header d-flex justify-content-between" >
                                    <h5 >Add Vendor Payment</h5>
                                    <div>
                                        <button className='btn btn-voilet' onClick={addRow}>Add row</button>
                                        <button className='btn btn-secondary mx-2 ' onClick={RemoveRow}>Remove row</button>
                                    </div>
                                </header>
                                <article className="card-body" >
                                    <form className='invoice-form' autoComplete='off'>
                                        <table className="table table-bordered">
                                            <thead>

                                                <tr >
                                                    <th scope="col">Invoice no  <span className='text-danger'>*</span></th>
                                                    <th scope="col">Invoice Amount  <span className='text-danger'>*</span></th>
                                                    <th scope="col">Payment Detail  <span className='text-danger'>*</span></th>
                                                    <th scope="col">Payment Amount  <span className='text-danger'>*</span></th>
                                                    <th scope="col">Payment Date  <span className='text-danger'>*</span></th>
                                                    <th scope="col">Remark</th>
                                                    <th scope="col">Ref no.  <span className='text-danger'>*</span></th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                {arry.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className='p-0 invoice-td'>
                                                            {/* <Select
                                                                options={options}
                                                                isMulti={false}
                                                                onChange={(e) => handleChnageVendorDetail(index, e.target.value)}
                                                            /> */}
                                                            <select type='text' id={`invno-${index}`} className='form-select m-0 invoice-inp' onChange={(e) => handleChnageVendorDetail(index, e.target.value)} onBlur={() => savatoarry(index)}>
                                                                <option value='' hidden>Select Invoice no</option>
                                                                {
                                                                    pendinginvoicelist.map((item, index) =>
                                                                        <option key={index} value={[`${item.sno},${item.invoice_amt}`]}>{`${item.reference_no}, (${item.invoice_no})`}</option>)
                                                                }
                                                            </select>
                                                        </td>
                                                        <td className='p-0 invoice-td'><input type='number' id={`invamt-${index}`} className='form-control m-0 invoice-inp' disabled onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`ptydtl-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='number' id={`ptyamt-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='date' id={`ptydate-${index}`} className='form-control m-0 invoice-inp' defaultValue={todatdate} onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`remark-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`refno-${index}`} className='form-control m-0 invoice-inp' disabled onBlur={() => savatoarry(index)} /></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <div className='btn_div '>
                                            <button className='btn btn-voilet' onClick={handleAddVendorIvoice}>Add Vendor Payment</button>
                                            <button type='reset' className='btn btn-secondary mx-2'>Reset</button>
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

export default AddVendorPayment;