import './Outstandingdetail.css'
import {BiSearchAlt2} from 'react-icons/bi'
const Outstatndingdetails = () => {
    return (
        <>
            <div className="Outstanding_container_details d-flex justify-content-between mt-2 mx-1">
                <div className="card1 flex-fill ">
                    <p className="bg-dark text-center text-white">Search Vendor Invoice</p>
                    <div className="d-flex justify-content-center">
                        <input className=" form-control w-50" type="search" placeholder="Search ..." />
                        <BiSearchAlt2 className='cursor-pointer mx-1 mt-2' style={{fontSize:"25px"}}/>
                    </div>
                </div>
                <div className="card1 flex-fill">
                    <p className="bg-dark text-center text-white">Search Payment Detail</p>
                    <div className="d-flex justify-content-center">
                        <input className=" form-control w-50" type="search" placeholder="Search ..." />
                        <BiSearchAlt2 className='cursor-pointer mx-1 mt-2' style={{fontSize:"25px"}}/>
                    </div>
                </div>
                <div className="card1 flex-fill">
                    <p className="bg-dark text-center text-white">Search Billing Account Number</p>
                    <div className="d-flex justify-content-center">
                        <input className=" form-control w-50" type="search" placeholder="Search ..." />
                        <BiSearchAlt2 className='cursor-pointer mx-1 mt-2' style={{fontSize:"25px"}}/>
                    </div>
                </div>

            </div>
            <div className="d-flex flex-column mt-2 px-2 " >
                <div className='border border-dark'>
                    <p className="bg-dark text-center text-white">Vendor Invoices - Detailed</p>
                    <div className="Outstanding_details_table " style={{ overflow: "auto", height: "20vh" }}>
                        <table className="table table-striped" >
                            <thead>
                                <tr className='text-danger'>
                                    <th scope="col">Company</th>
                                    <th scope="col">Vendor</th>
                                    <th scope="col">SubCat</th>
                                    <th scope="col">Inv</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>  <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='border border-dark'>
                    <p className="bg-dark text-center text-white ">Paid Invoices - Detailed</p>
                    <div className="Outstanding_details_table " style={{ overflow: "auto", height: "20vh" }}>
                        <table className="table table-striped " >
                            <thead>
                                <tr className='text-danger'>
                                    <th scope="col">Company</th>
                                    <th scope="col">Vendor</th>
                                    <th scope="col">SubCat</th>
                                    <th scope="col">Inv</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                  <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>  <tr>
                                    <th scope="row">ILOG</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Outstatndingdetails;