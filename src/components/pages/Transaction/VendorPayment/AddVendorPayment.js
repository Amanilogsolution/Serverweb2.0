import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import './VendorPayment.css'
// import { ActiveVendorCode, GetVendorCode } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function AddVendorPayment() {
    const [loading, setLoading] = useState(false)

    const [count, setCount] = useState(0);
    const [arry, setArry] = useState([0]);
    const [arryval, setArryval] = useState([{}]);
    // const [vendorlist, setVendorlist] = useState([])
    // const [vendordetail, setVendordetail] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            // const vendorall = await ActiveVendorCode();
            // console.log(vendorall)
            // setVendorlist(vendorall)
            setLoading(true)
        }
        fetchdata();
    }, [])

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

        }
    };

    const savatoarry = (index) => {
        const invno = document.getElementById(`invno-${index}`).value;
        const invamt = document.getElementById(`invamt-${index}`).value;

        const ptydtl = document.getElementById(`ptydtl-${index}`).value;
        const ptyamt = document.getElementById(`ptyamt-${index}`).value;
        const ptydate = document.getElementById(`ptydate-${index}`).value;
        const remark = document.getElementById(`remark-${index}`).value;
        const refno = document.getElementById(`refno-${index}`).value;

        let obj = {
            InvoiceNo: invno, InvoiceAmt: invamt, paymentDetail: ptydtl,PaymentAmt:ptyamt,
            Paymentdate: ptydate, Remark: remark, Refno: refno
        };

        arryval[index] = obj;

    };

    const handleAddVendorIvoice = (e) => {
        e.preventDefault();
        console.log(arryval)
    }

    const handleChnageVendorDetail = async (e) => {
        // const val = e.target.value
        // let result = val.indexOf("sno");
        // let result2 = val.substring(result + 3);
        // const vendsubdetail = await GetVendorCode(result2)
        // console.log(vendsubdetail)
        // setVendordetail(vendsubdetail[0])
    }

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
                                                    <th scope="col">Invoice no</th>
                                                    <th scope="col">Invoice Amount</th>
                                                    <th scope="col">Payment Detail</th>
                                                    <th scope="col">Payment Amount</th>
                                                    <th scope="col">Payment Date</th>
                                                    <th scope="col">Remark</th>
                                                    <th scope="col">Ref no.</th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                {arry.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className='p-0 invoice-td'>
                                                            <select type='text' id={`invno-${index}`} className='form-select m-0 invoice-inp' onChange={handleChnageVendorDetail} onBlur={() => savatoarry(index)}>
                                                                <option value='' hidden>Select Invoice no</option>
                                                                <option value='abc' >Abc</option>
                 
                                                            </select>
                                                        </td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`invamt-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`ptydtl-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='number' id={`ptyamt-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='date' id={`ptydate-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`remark-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`refno-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
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