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
                        <BiSearchAlt2 style={{fontSize:"25px",margin:"4px 3px",cursor:"pointer"}}/>
                        {/* <button class=" btn btn-outline-success " type="submit">Search</button> */}
                    </div>
                </div>
                <div className="card1 flex-fill">
                    <p className="bg-dark text-center text-white">Search Payment Detail</p>
                    <div className="d-flex justify-content-center">

                        <input className=" form-control w-50" type="search" placeholder="Search ..." />
                        <BiSearchAlt2 style={{fontSize:"25px",margin:"4px 3px",cursor:"pointer"}}/>

                        {/* <button class="  btn btn-outline-success " type="submit">Search</button> */}
                    </div>
                </div>
                <div className="card1 flex-fill">
                    <p className="bg-dark text-center text-white">Search Billing Account Number</p>
                    <div className="d-flex justify-content-center">

                        <input className=" form-control w-50" type="search" placeholder="Search ..." />
                        <BiSearchAlt2 style={{fontSize:"25px",margin:"4px 3px",cursor:"pointer"}}/>

                        {/* <button class="  btn btn-outline-success " type="submit">Search</button> */}
                    </div>
                </div>

            </div>
            <div className="d-flex flex-column mt-2 mx-1" style={{ minHeight: "60vh" }}>
                <div style={{ maxHeight: "30vh" }}>
                    <p className="bg-dark text-center text-white">Vendor Invoices - Detailed</p>
                    <div className="Outstanding_table" style={{ overflow: "auto", height: "20vh" }}>
                        <table class="table table-striped" >
                            <thead>
                                <tr>
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
                <div style={{ minHeight: "30vh" }}>
                    <p className="bg-dark text-center text-white">Paid Invoices - Detailed</p>
                    <div className="Outstanding_table" style={{ overflow: "auto", height: "20vh" }}>
                        <table class="table table-striped" >
                            <thead>
                                <tr>
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

            </div>

        </>
    )
}

export default Outstatndingdetails;