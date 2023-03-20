import React, { useEffect, useState, useContext } from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import { PendingVendorInvoice, UpdateVendorInvoice, FileUpload } from '../../../../api'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { RiArrowGoBackFill } from 'react-icons/ri'
import { GlobalAlertInfo } from '../../../../App';
import Modal from '../../AlertModal/Modal';

function AddVendorPayment() {
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(true)

    const [todatdate, setTodaydate] = useState('')
    const [count, setCount] = useState(0);
    const [arry, setArry] = useState([0]);
    const [arryval, setArryval] = useState([{}]);
    const [pendinginvoicelist, setPendinginvoicelist] = useState([])
    // const [vendordetail, setVendordetail] = useState([])

    const [indexno, setIndexno] = useState('');
    const [file, setFile] = useState([])



    // ########################### Modal Alert #############################################
    const { tooglevalue, callfun } = useContext(GlobalAlertInfo)
    // ########################### Modal Alert #############################################


    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')
            const invoice = await PendingVendorInvoice(org);
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
            let objval = [...arryval];
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
        const appramt = document.getElementById(`appramt-${index}`).value;
        const ptydate = document.getElementById(`ptydate-${index}`).value;
        const remark = document.getElementById(`remark-${index}`).value;
        let obj = {
            sno: sno, InvoiceNo: invno, paymentDetail: ptydtl, PaymentAmt: ptyamt, ApprovedAmt: appramt,
            Paymentdate: ptydate, Remark: remark, filedata: file[index]
        };
        arryval[index] = obj;

    };

    const handleAddVendorIvoice = async (e) => {
        e.preventDefault();
        console.log(arryval)
        return 0;
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'
        const org = localStorage.getItem('Database')
        let errorcount = 0;
        for (let i = 0; i < arryval.length; i++) {
            if (!arryval[i].InvoiceNo) {
                setLoading(true)
                document.getElementById('subnitbtn').disabled = false
                callfun('Please Select the Invoice no', 'warning', 'self')

                errorcount = errorcount + 1;
                return false;
            }
            else if (arryval[i].InvoiceNo === 'elect Invoice n') {
                setLoading(true)
                document.getElementById('subnitbtn').disabled = false
                callfun('Please Select the Invoice no', 'warning', 'self')

                errorcount = errorcount + 1;
                return false;
            }
            else if (!arryval[i].paymentDetail || !arryval[i].PaymentAmt) {
                setLoading(true)
                document.getElementById('subnitbtn').disabled = false
                callfun('Please enter the Mandatory field', 'warning', 'self')

                errorcount = errorcount + 1;
                return false;
            }
        }
        if (errorcount === 0) {
            const result = await UpdateVendorInvoice(org, arryval, localStorage.getItem('UserId'))
            setLoading(true)
            if (result === 'Data Updated') {
                callfun('Vendor Payment Added', 'success', '/TotalVendorPayment')
            }
            else {
                callfun('Server Error', 'danger', 'self')
                document.getElementById('subnitbtn').disabled = false
            }
        }
    }

    const handleChnageVendorDetail = async (index, e) => {
        const val = e;
        const toindex = val.indexOf(",")
        document.getElementById(`invamt-${index}`).value = val.slice(toindex + 1)
        document.getElementById(`appramt-${index}`).value = val.slice(toindex + 1)

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
                        {/* ######################### Sanckbar Start ##################################### */}
                        <Modal
                            theme={tooglevalue.theme}
                            text={tooglevalue.message}
                            show={tooglevalue.modalshowval}
                            url={tooglevalue.url}
                        />
                        {/* ######################### Sanckbar End ##################################### */}

                        <div className='main_container px-2'>
                            <div className='main-inner-container d-flex justify-content-between  pt-4 pb-3'>
                                <h4><span className='page-type-head1'>Vendor Payment <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Add Vendor Payment</span> </h4>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalVendorPayment' }} >Back <RiArrowGoBackFill /></button>
                            </div>
                            <div className="bg-white shadow1-silver rounded15 mt-1 card inner-card pb-3">
                                <header className="card-header d-flex justify-content-between" >
                                    <h5 >Add Vendor Payment</h5>
                                    <div>
                                        <button className='btn btn-voilet' onClick={addRow}>Add row</button>
                                        <button className='btn btn-danger mx-2 ' onClick={RemoveRow}>Remove row</button>
                                    </div>
                                </header>
                                <article className="card-body" >
                                    <form className='invoice-form overflow-auto' autoComplete='off'>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr >
                                                    <th scope="col">Invoice no  <span className='text-danger'>*</span></th>
                                                    <th scope="col">Invoice Amount  <span className='text-danger'>*</span></th>
                                                    <th scope="col">Payment Detail  <span className='text-danger'>*</span></th>
                                                    <th scope="col">Payment Amount  <span className='text-danger'>*</span></th>
                                                    <th scope="col">Approved Amount  <span className='text-danger'>*</span></th>
                                                    <th scope="col">Payment Date  <span className='text-danger'>*</span></th>
                                                    <th scope="col">Remark</th>
                                                    <th scope="col">Ref no.  <span className='text-danger'>*</span></th>
                                                    <th scope="col">Upload  <span className='text-danger'>*</span></th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                {arry.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className='p-0'>
                                                            {/* <Select
                                                                options={options}
                                                                isMulti={false}
                                                                onChange={(e) => handleChnageVendorDetail(index, e.target.value)}
                                                            /> */}
                                                            <select type='text' id={`invno-${index}`} className='form-select m-0 ' onChange={(e) => handleChnageVendorDetail(index, e.target.value)} onBlur={() => savatoarry(index)}>
                                                                <option value='' hidden>Select Invoice no</option>
                                                                {
                                                                    pendinginvoicelist.map((item, index) =>
                                                                        <option key={index} value={[`${item.sno},${item.invoice_amt}`]}>{`${item.reference_no}, (${item.invoice_no})`}</option>)
                                                                }
                                                            </select>
                                                        </td>
                                                        <td className='p-0'><input type='number' id={`invamt-${index}`} className='form-control m-0 ' disabled onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0'><input type='text' id={`ptydtl-${index}`} className='form-control m-0 ' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0'><input type='number' id={`ptyamt-${index}`} className='form-control m-0 ' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0'><input type='number' id={`appramt-${index}`} className='form-control m-0 ' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0'><input type='date' id={`ptydate-${index}`} className='form-control m-0 ' defaultValue={todatdate} onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0'><input type='text' id={`remark-${index}`} className='form-control m-0 ' onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0'><input type='text' id={`refno-${index}`} className='form-control m-0 ' disabled onBlur={() => savatoarry(index)} /></td>
                                                        <td className='p-0'><button className='form-control m-0 btn btn-success' data-toggle="modal" data-target="#exampleModalCenter"
                                                            onClick={(e) => {
                                                                e.preventDefault(); setIndexno(index);
                                                                document.getElementById("uploadbutton").style.display = "none";
                                                                document.getElementById("inputfile").value = '';
                                                            }}>Upload</button></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <div className='btn_div'>
                                            <button className='btn btn-voilet' id='subnitbtn' onClick={handleAddVendorIvoice}>Add Vendor Payment</button>
                                            <button type='reset' className='btn btn-secondary mx-2'>Reset</button>
                                        </div>
                                    </form>
                                </article>
                            </div>


                            {/* Upload Model Start */}
                            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLongTitle">Upload Invoice</h5>
                                        </div>
                                        <div className="modal-body">

                                            <input type="file" id='inputfile' onChange={async (event) => {
                                                setLoading2(false)
                                                setTimeout(async () => {
                                                    const data = new FormData();
                                                    data.append("images", event.target.files[0])
                                                    const UploadLink = await FileUpload(data)
                                                    setLoading2(true)
                                                    if (UploadLink.length > 1) {
                                                        file[indexno] = UploadLink;
                                                        document.getElementById("uploadbutton").style.display = "flex";
                                                    }
                                                }, 2000)
                                            }} />
                                        </div>
                                        <div className="modal-footer">
                                            {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                                            {
                                                loading2 ? null : 'Wait a Second'
                                            }
                                            <button type="button" className="btn btn-primary" id="uploadbutton" data-dismiss="modal" style={{ display: "none" }}
                                                onClick={(e) => { e.preventDefault(); savatoarry(indexno) }}>Upload</button>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Upload Model End */}

                        </div>
                    </Sidebar>
                    : <LoadingPage />


            }
        </>
    )
}

export default AddVendorPayment;