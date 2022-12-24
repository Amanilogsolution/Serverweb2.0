import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import Snackbar from '../../../Snackbar/Snackbar';
import LoadingPage from '../../LoadingPage/LoadingPage';
import { HiUserCircle } from 'react-icons/hi';
import {TotalCountry,TotalState,TotalCity,getOrganisation,CurrencyMaster,UpdateOrganisationDetails} from '../../../api/index'


const OrganisationDetails = () => {
    const [loading, setLoading] = useState(true)
    const [OrgData,setOrgdata] = useState({})
    const [countrylist, setCountrylist] = useState([]);
    const [statelist, setStatelist] = useState(false);
    const [citylist, setCitylist] = useState(false);
    const [currencylist, setCurrencylist] = useState([]);


    useEffect(() => {
      const fetchData = async () => {

         const Orgdetails = await getOrganisation(localStorage.getItem('Database'))
         console.log(Orgdetails)
         setOrgdata(Orgdetails)
         const totalCountry = await TotalCountry();
         setCountrylist(totalCountry)

         const org_state = await TotalState(Orgdetails.org_country)
         setStatelist(org_state)

         const result = await TotalCity(Orgdetails.org_state)
         setCitylist(result)

         // const currency = await CurrencyMaster()
         // setCurrencylist(currency)

      }
      fetchData()

    },[])

    const handleGetCity = async (e) => {
      e.preventDefault();
      const result = await TotalCity(e.target.value)
      setCitylist(result)
  }

  const handleGetState = async (e) => {
   e.preventDefault();
   const value = e.target.value
   const result = await TotalState(value)
   setStatelist(result)
}

const handleClick = async(e) =>{
   e.preventDefault();

   const org_name = document.getElementById('org_name').value;
   const country = document.getElementById('country').value;
   const state = document.getElementById('state').value;
   const city = document.getElementById('city').value;
   const currency = document.getElementById('currency').value;
   console.log(org_name,country,state,city,currency)

   const result = await UpdateOrganisationDetails(localStorage.getItem('Database'),org_name,country,state,city,currency)

   if(result=="Updated"){
      alert("Updated")
      window.location.href='/Dashboard'
   }
   console.log(result)

}

    return (
        <>
           {
              loading ?
                 <Sidebar>
                    {/* <div id="snackbar" style={{ display: "none" }}>
                       <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                    </div> */}
  
                    <div className='Profile_container bg-light d-flex align-items-center'>
  
                       {/* <div className='pofile_card'> */}
                       <div className='profile d-flex'>
                          <div className='photo_sec d-flex  py-3 text-light position-relative'>
                             <h2 >Organisation Details</h2>
                             <HiUserCircle className='profile_log ' />
                          </div>
                          <div className='details px-5 py-3'>
                             <form>
                                <div className='row my-2'>
                                   <div className='col-md-6'>
                                      <label>Organisation Name</label>
                                      <br />
                                      <input className="form-control" id='org_name' defaultValue={OrgData.org_name}  ></input>
                                   </div>
                                   <div className='col-md-6'>
                                      <label>Country</label>
                                      <br />
                                      <select id="country" className="form-select"
                                                    onChange={handleGetState}
                                                    >
                                                    <option value={OrgData.org_country} hidden>{OrgData.country_name}</option>
                                                    {
                                                        countrylist.map((item, index) => (
                                                            <option key={index} value={item.country_id}>{item.country_name}</option>
                                                        ))
                                                    }
                                                </select>
                                      {/* <input className="form-control" id='employee_number' value={OrgData.country_name}  ></input> */}
                                   </div>
                                </div>
                                <div className='row my-2'>
                                   <div className='col-md-6'>
                                      <label>State</label>
                                      <br />
                                      <select id="state" className="form-select"
                                                    onChange={handleGetCity}
                                                >
                                                    <option value={OrgData.org_state} hidden>{OrgData.state_name}</option>
                                                    {
                                                        statelist.length ?
                                                            statelist.map((item, index) => (
                                                                <option key={index} value={item.state_id}>{item.state_name}</option>
                                                            ))
                                                            : <option value=''> Please Select Country</option>
                                                    }
                                                </select>
                                      {/* <input className="form-control" id='employee_email' value={OrgData.state_name}  ></input> */}
                                   </div>
                                   <div className='col-md-6'>
                                      <label>City</label>
                                      <br />
                                      <select id="city" className="form-select">
                                                    <option value='' hidden>{OrgData.org_city}</option>
                                                    {
                                                        citylist.length ?
                                                            citylist.map((item, index) => (
                                                                <option key={index} value={item.city_name}>{item.city_name}</option>
                                                            ))
                                                            : <option value=''> Please Select Country</option>
                                                    }
                                                </select>
                                      {/* <input className="form-control" id="Address" value={OrgData.org_city} ></input> */}
                                   </div>
                                </div>
                                <div className='row my-2'>
                                   <div className='col-md-6'>
                                      <label>Currency</label>
                                      <br />
                                      <select id="currency" className="form-control">
                                                    <option value={OrgData.org_currency} hidden>{OrgData.org_currency}</option>

                                                    {currencylist.length?
                                                        currencylist.map((item,index)=>(
                                                            <option key={index} value={item.currencyCode}>{item.name} , {item.currencyCode}</option>

                                                        ))
                                                        : <option value=''> Please Select Currency</option>
                                                    }
                                                    {/* <option>...</option> */}
                                                </select>
                                      {/* <input className="form-control" id="location" value={OrgData.org_currency} disabled></input> */}
                                   </div>
                                   <div className='col-md-6'>
                                      <label>GST</label>
                                      <br />
                                      <input className="form-control" id="company" value={OrgData.org_gst}disabled></input>
                                   </div>
                                </div>
                                {/* </div> */}
  
                                <hr />
                               
  
                                <div className="form-group mt-3 d-flex justify-content-end " >
                                   <button type="submit" onClick={handleClick} className="btn btn-voilet " id="subnitbtn"
                                   >Update</button>
                                </div>
  
                             </form>
                          </div>
                       </div>
                       {/* </div> */}
                    </div>
                 </Sidebar >
                 : <LoadingPage />
           }
        </>
     )
}
export default OrganisationDetails