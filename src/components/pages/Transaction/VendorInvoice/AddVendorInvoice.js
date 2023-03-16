import React, { useEffect, useState, useContext } from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import { ActiveVendorContract, VendorContractDetail, InsertVendorInvoice } from '../../../../api'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { RiArrowGoBackFill } from 'react-icons/ri'
import Select from 'react-select';
// import Snackbar from '../../../../Snackbar/Snackbar';
import { GlobalAlertInfo } from '../../../../App';
import Modal from '../../AlertModal/Modal';


function AddVendorInvoice() {

    const [loading, setLoading] = useState(false)
    const [todatdate, setTodaydate] = useState('')
    const [count, setCount] = useState(0);
    const [arry, setArry] = useState([0]);
    const [arryval, setArryval] = useState([{}]);
    const [vendorcontractlist, setVendorcontractlist] = useState([])
    const [Vendorname, setVendorname] = useState([])
    // ########################### Modal Alert #############################################
    //    const [datas, setDatas] = useState({
    //     message: "abc",
    //     title: "title",
    //     type: "type",
    //     route: "#",
    //     toggle: "true",
    // })

    const { tooglevalue, callfun } = useContext(GlobalAlertInfo)
    // ########################### Modal Alert #############################################


    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')
            const vendorcontract = await ActiveVendorContract(org);
            setVendorcontractlist(vendorcontract)
            todaydate()
            setLoading(true)
        }
        fetchdata();
    }, [])

    let options = vendorcontractlist.map((ele) => {
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

            let objval = [...arryval];
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
        document.getElementById('subnitbtn').disabled = 'true'
        setLoading(false)
        const org = localStorage.getItem('Database')

        let errorcount = 0;
        for (let i = 0; i < arryval.length; i++) {
            if (!arryval[i]) {
                setLoading(true)
                callfun('Please Select the vendor', 'warning', 'self')
                document.getElementById('subnitbtn').disabled = false

                // setDatas({ ...datas, message: "Please Select the vendor", title: "warning", type: "warning", route: "#", toggle: "true" })
                // document.getElementById('snackbar').style.display = "block"
                errorcount = errorcount + 1;
                return false;

            }
            else if (!arryval[i].vendor) {
                setLoading(true)
                document.getElementById('subnitbtn').disabled = false
                callfun('Please Select the vendor', 'warning', 'self')

                // setDatas({ ...datas, message: "Please Select the vendor", title: "warning", type: "warning", route: "#", toggle: "true" })
                // document.getElementById('snackbar').style.display = "block"
                errorcount = errorcount + 1;
                return false;
            }
            else if (!arryval[i].invno || !arryval[i].invamt) {
                setLoading(true)
                document.getElementById('subnitbtn').disabled = false
                callfun('Please enter the Mandatory field', 'warning', 'self')

                // setDatas({ ...datas, message: "Please enter the Mandatory field", title: "warning", type: "warning", route: "#", toggle: "true" })
                // document.getElementById('snackbar').style.display = "block"
                errorcount = errorcount + 1;
                return false;

            }
        }
        if (errorcount === 0) {
            setLoading(true)

            const result = await InsertVendorInvoice(org, arryval, localStorage.getItem('UserId'))

            if (result === 'Data Added') {
                callfun('Vendor Invoice Added', 'success', '/TotalVendorInvoice')

                // setDatas({ ...datas, message: "Vendor Invoice Added", title: "success", type: "success", route: "/TotalVendorInvoice", toggle: "true" })
                // document.getElementById('snackbar').style.display = "block"
            }
            else {
                callfun('Server Error', 'danger', 'self')
                document.getElementById('subnitbtn').disabled = false

                // setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "#", toggle: "true" })
                // document.getElementById('snackbar').style.display = "block"
            }

        }



    }

    const handleChnageVendorDetail = async (e) => {
        const org = localStorage.getItem('Database')
        const toindex = e.value.split(",")
        Vendorname[e.Index] = toindex[1]
        const vebndconid = toindex[0]
        const detail = await VendorContractDetail(org, vebndconid);
        document.getElementById(`accountno-${e.Index}`).value = detail.customer_account_no;
        document.getElementById(`refno-${e.Index}`).value = detail.reference_no;
    }


    return (
        <>
            {
                loading ?
                    <Sidebar>
                        {/* ######################### Sanckbar Start ##################################### */}

                        {/* <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div> */}
                        <Modal
                            theme={tooglevalue.theme}
                            text={tooglevalue.message}
                            show={tooglevalue.modalshowval}
                            url={tooglevalue.url}
                        />
                        {/* ######################### Sanckbar End ##################################### */}

                        <div className='main_container px-1'>
                            <div className='main-inner-container d-flex justify-content-between  pt-4 pb-3'>
                                <h4><span className='page-type-head1'>Vendor Invoice <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Add Vendor Invoice</span> </h4>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalVendorInvoice' }} >Back <RiArrowGoBackFill /></button>
                            </div>
                            <div className="bg-white shadow1-silver rounded15 mt-1 card inner-card pb-3">
                                <header className="card-header d-flex justify-content-between align-items-center px-3" >
                                    <h5 >Add Vendor Invoice</h5>
                                    <div>
                                        <button className='btn btn-voilet' onClick={addRow}>Add row</button>
                                        <button className='btn btn-secondary mx-2 ' onClick={RemoveRow}>Remove row</button>
                                    </div>
                                </header>
                                <article className="card-body">
                                    <form autoComplete='off'>
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
                                                        <td className='p-0 '>
                                                            <Select options={options} className="col" isMulti={false}
                                                                onBlur={() => savatoarry(index)}
                                                                onChange={(e) => handleChnageVendorDetail({ ...e, Index: index })}
                                                            />
                                                        </td>
                                                        <td className='p-0 '><input type='text' id={`accountno-${index}`} className='form-control m-0  border-0' disabled onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 '><input type='text' id={`invno-${index}`} className='form-control m-0  border-0' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 '><input type='number' id={`invamt-${index}`} className='form-control m-0  border-0' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 '><input type='date' id={`invdate-${index}`} className='form-control m-0  border-0' defaultValue={todatdate} onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 '><input type='date' id={`invduedate-${index}`} className='form-control m-0  border-0' defaultValue={todatdate} onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 '><input type='date' id={`invsubdate-${index}`} className='form-control m-0  border-0' defaultValue={todatdate} onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 '><input type='text' id={`remark-${index}`} className='form-control m-0  border-0' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 '><input type='text' id={`refno-${index}`} className='form-control m-0  border-0' disabled onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0 '><input type='text' id={`printercount-${index}`} className='form-control m-0  border-0' onBlur={() => savatoarry(index)} /></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <div className='btn_div mx-2'>
                                            <button className='btn btn-voilet' id='subnitbtn' onClick={handleAddVendorIvoice}>Submit</button>
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