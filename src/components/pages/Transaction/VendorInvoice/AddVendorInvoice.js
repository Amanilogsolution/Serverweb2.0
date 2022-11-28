import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import './VendorInvoice.css'
import { ActiveVendorContract, VendorContractDetail, InsertVendorInvoice } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Select from 'react-select';
import Snackbar from '../../../../Snackbar/Snackbar';


function AddVendorInvoice() {

    const [loading, setLoading] = useState(false)
    const [todatdate, setTodaydate] = useState('')
    const [count, setCount] = useState(0);
    const [arry, setArry] = useState([0]);
    const [arryval, setArryval] = useState([{}]);
    const [vendorcontractlist, setVendorcontractlist] = useState([])
    const [Vendorname,setVendorname] = useState([])
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

            const vendorcontract = await ActiveVendorContract(org);
            setVendorcontractlist(vendorcontract)
            todaydate()
            setLoading(true)
        }
        fetchdata();
    }, [])

    let options= vendorcontractlist.map((ele) => {
        return { value: `${ele.sno},${ele.vendor}`, label: `${ele.vendor}, ${ele.reference_no}` };
    })
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
        let vendor = Vendorname[index];

        // const val = vendor;
        // const toindex = val.indexOf(",")
        // vendor = val.slice(toindex + 1)

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

    const handleAddVendorIvoice = async (e) => {
        e.preventDefault();
        const org = sessionStorage.getItem('Database')

        setLoading(false)
        let errorcount = 0;
        for (let i = 0; i < arryval.length; i++) {
            if (!arryval[i]) {
                setLoading(true)
                setDatas({ ...datas, message: "Please Select the vendor", title: "Error", type: "warning", route: "#", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
                errorcount = errorcount + 1;
                return false;

            }
            else if(!arryval[i].vendor){
                setLoading(true)
                setDatas({ ...datas, message: "Please Select the vendor", title: "Error", type: "warning", route: "#", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
                errorcount = errorcount + 1;
                return false;
            }
            else if (!arryval[i].invno || !arryval[i].invamt) {
                setLoading(true)
                setDatas({ ...datas, message: "Please enter the Mandatory field", title: "Error", type: "warning", route: "#", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
                errorcount = errorcount + 1;
                return false;

            }
        }
        if (errorcount === 0) {
            setLoading(true)
            const result = await InsertVendorInvoice(org,arryval, sessionStorage.getItem('UserId'))
         
            if(result==='Data Added'){
                setDatas({ ...datas, message: "Vendor Invoice Added", title: "success", type: "success", route: "/TotalVendorInvoice", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else{ 
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "#", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }

        }

    

    }

    const handleChnageVendorDetail = async (e) => {
        const org = sessionStorage.getItem('Database')

        console.log(e)
        const toindex = e.value.split(",")
        Vendorname[e.Index] = toindex[1]
        console.log(toindex[1])
        const vebndconid = toindex[0]
        const detail = await VendorContractDetail(org,vebndconid);
        document.getElementById(`accountno-${e.Index}`).value = detail.customer_account_no;
        document.getElementById(`refno-${e.Index}`).value = detail.reference_no;
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
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Vendor Invoice</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Vendor Invoice</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalVendorInvoice' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className=" card contract-div" style={{ width: "98%",minHeight:"62vh"}}>
                                <header className="card-header d-flex justify-content-between" >
                                    <h5 >Add Vendor Invoice</h5>
                                    <div>
                                        <button className='btn btn-voilet' onClick={addRow}>Add row</button>
                                        <button className='btn btn-secondary mx-2 ' onClick={RemoveRow}>Remove row</button>
                                    </div>
                                </header>
                                <article className="card-body" >
                                    <form className='invoice-form' autoComplete='off' style={{minHeight:"62vh"}}>
                                        <table className="table table-bordered" >
                                            <thead>

                                                <tr className='text-center'>
                                                    <th scope="col">Vendor <span className='text-danger'>*</span></th>
                                                    <th scope="col">Account No<span className='text-danger'>*</span></th>
                                                    <th scope="col">Invoice No <span className='text-danger'>*</span></th>
                                                    <th scope="col">Invoice Amt <span className='text-danger'>*</span></th>
                                                    <th scope="col">Invoice Date <span className='text-danger'>*</span></th>
                                                    <th scope="col">Invoice DueDate <span className='text-danger'>*</span></th>
                                                    <th scope="col">Invoice SubDate <span className='text-danger'>*</span></th>
                                                    <th scope="col">Remark </th>
                                                    <th scope="col">Ref no. <span className='text-danger'>*</span></th>
                                                    <th scope="col">Reading</th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                {arry.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className='p-0 invoice-td'>
                                                        <Select options={options} className="col" isMulti={false} 
                                                         onBlur={() => savatoarry(index)}
                                                        onChange={(e)=>handleChnageVendorDetail({...e,Index:index})}
                                                         />

                                                            {/* <select type='text' id={`vendor-${index}`} className='form-select m-0 invoice-inp' onChange={(e) => handleChnageVendorDetail(index, e.target.value)} onBlur={() => savatoarry(index)}>
                                                                <option value='' hidden>Select</option>
                                                                {
                                                                    vendorcontractlist.map((item, index) =>
                                                                        <option key={index} value={[`${item.sno},${item.vendor}`]}>{`${item.vendor}, (${item.reference_no})`}</option>)
                                                                }

                                                            </select> */}
                                                        </td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`accountno-${index}`} className='form-control m-0 invoice-inp' disabled onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`invno-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='number' id={`invamt-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='date' id={`invdate-${index}`} className='form-control m-0 invoice-inp' defaultValue={todatdate} onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='date' id={`invduedate-${index}`} className='form-control m-0 invoice-inp' defaultValue={todatdate} onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='date' id={`invsubdate-${index}`} className='form-control m-0 invoice-inp' defaultValue={todatdate} onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`remark-${index}`} className='form-control m-0 invoice-inp' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 invoice-td'><input type='text' id={`refno-${index}`} className='form-control m-0 invoice-inp' disabled onBlur={() => savatoarry(index)} /></td>
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
                : <LoadingPage/>
            }
        </>
    )
}

export default AddVendorInvoice;