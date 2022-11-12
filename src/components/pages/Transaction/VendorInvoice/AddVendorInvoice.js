import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import './VendorInvoice.css'
import { ActiveVendorCode, GetVendorCode } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function AddVendorInvoice() {

    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0);
    const [arry, setArry] = useState([0]);
    const [arryval, setArryval] = useState([{}]);
    const [vendorlist, setVendorlist] = useState([])
    const [vendordetail, setVendordetail] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const vendorall = await ActiveVendorCode();
            console.log(vendorall)
            setVendorlist(vendorall)
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
        const vendor = document.getElementById(`vendor-${index}`).value;
        const accountno = document.getElementById(`accountno-${index}`).value;
        const invno = document.getElementById(`invno-${index}`).value;
        const invamt = document.getElementById(`invamt-${index}`).value;

        const invdate = document.getElementById(`invdate-${index}`).value;
        const invduedate = document.getElementById(`invduedate-${index}`).value;
        const invsubdate = document.getElementById(`invsubdate-${index}`).value;
        const remark = document.getElementById(`remark-${index}`).value;
        const refno = document.getElementById(`refno-${index}`).value;
        const printercount = document.getElementById(`printercount-${index}`).value;

        let obj = {
            vendor: vendor, accountno: accountno, invno: invno, invamt: invamt, invdate: invdate,
            invduedate: invduedate, invsubdate: invsubdate, remark: remark, refno: refno, printercount: printercount
        };

        arryval[index] = obj;

    };

    const handleAddVendorIvoice = (e) => {
        e.preventDefault();
        console.log(arryval)
    }

    const handleChnageVendorDetail = async (e) => {
        const val = e.target.value
        let result = val.indexOf("sno");
        let result2 = val.substring(result + 3);
        const vendsubdetail = await GetVendorCode(result2)
        console.log(vendsubdetail)
        setVendordetail(vendsubdetail[0])
    }

    return (
        <>
            {
                loading ?
                    <Sidebar>
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Vendor Invoice</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Vendor Invoice</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalVendorInvoice' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className=" card contract-div" style={{ width: "98%" }}>
                                <header className="card-header d-flex justify-content-between" >
                                    <h5 >Add Vendor Invoice</h5>
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
                                                    <th scope="col">Vendor <span className='text-danger'>*</span></th>
                                                    <th scope="col">Account No <span className='text-danger'>*</span></th>
                                                    <th scope="col">Invoice No <span className='text-danger'>*</span></th>
                                                    <th scope="col">Invoice Amount <span className='text-danger'>*</span></th>
                                                    <th scope="col">Invoice Date <span className='text-danger'>*</span></th>
                                                    <th scope="col">Invoice DueDate <span className='text-danger'>*</span></th>
                                                    <th scope="col">Invoice SubDate <span className='text-danger'>*</span></th>
                                                    <th scope="col">Remark </th>
                                                    <th scope="col">Ref no. <span className='text-danger'>*</span></th>
                                                    <th scope="col">Printer Counter</th>

                                                </tr>

                                            </thead>
                                            <tbody>
                                                {arry.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className='p-0 invoice-td'>
                                                            <select type='text' id={`vendor-${index}`} className='form-select m-0 invoice-inp' onChange={handleChnageVendorDetail} onBlur={() => savatoarry(index)}>
                                                                <option value='' hidden>Select Vendor</option>
                                                                {
                                                                    vendorlist.map((item, index) =>
                                                                        <option key={index} value={[`${item.vendor_name},sno${item.sno}`]}>{item.vendor_name}</option>)
                                                                }

                                                            </select>
                                                        </td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`accountno-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`invno-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`invamt-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='date' id={`invdate-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='date' id={`invduedate-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='date' id={`invsubdate-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`remark-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`refno-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`printercount-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <div className='btn_div '>
                                            <button className='btn btn-voilet' onClick={handleAddVendorIvoice}>Add Vendor Invoice</button>
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

export default AddVendorInvoice; 