import './form.css'

function Form() {
    return (
        <>
<div className="" style={{border:"2px solid red"}}>

            <div className="col " style={{ margin: "75px auto", width: "630px",border:"2px solid red" }}>
                <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                    <header className="card-header" style={{ background: "rgba(0,0,0,0.2)" }}>
                        <h4 className="card-title mt-2" >Form</h4>
                    </header>
                    <article className="card-body" >
                        <form style={{ margin: "0px 20px 0px 15px" }}>
                            <br />

                            <div className="form-group">
                                <label>Name </label>
                                <input type="text" className="form-control" id='name' />
                            </div> <br />

                            <div className="form-group " >
                                <label>Date </label>
                                <input type="date" className="form-control" id='date' />
                            </div> <br />
                            <div className="form-row">
                                <div className="form-group " >
                                    <label>Select</label>
                                    <select className="form-control" id='onSite' style={{ height: "32px" }}>
                                        <option defaultValue hidden>Choose ...</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div> <br />

                            <div className="form-group">
                                <label>Remarks</label>
                                <textarea className="form-control" placeholder="Comments" type="text" id='remark' />
                            </div>



                            <div className="form-group" >
                                <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn">Submit</button>
                                <button type="submit" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
            </div>
            {/* 
<main className="my-form">
  <div className="cotainer">
    <div className="justify-content-center main-div" >
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Register</div>
          <div className="card-body">
            <form name="my-form" className="form-div" >
              <div className="form-group row">
                <label htmlFor="full_name" className="col-md-2 col-form-label ">Full Name</label>
                <div className="col-md-6">
                  <input type="text" id="full_name" className="form-control" name="full-name" />
                </div>
              </div>
              <div className="form-group row" >
                <label htmlFor="email_address" className="col-md-2 col-form-label text-md-right">E-Mail Address</label>
                <div className="col-md-4" >
                  <input type="text" id="email_address" className="form-control" name="email-address" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="user_name" className="col-md-2 col-form-label text-md-right">User Name</label>
                <div className="col-md-6">
                  <input type="text" id="user_name" className="form-control" name="username" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="phone_number" className="col-md-2 col-form-label text-md-right">Phone Number</label>
                <div className="col-md-6">
                  <input type="text" id="phone_number" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="present_address" className="col-md-2 col-form-label text-md-right">Present Address</label>
                <div className="col-md-6">
                  <input type="text" id="present_address" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="permanent_address" className="col-md-2 col-form-label text-md-right">Permanent Address</label>
                <div className="col-md-6">
                  <input type="text" id="permanent_address" className="form-control" name="permanent-address" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="nid_number" className="col-md-2 col-form-label text-md-right"><abbr title="National Id Card">NID</abbr> Number</label>
                <div className="col-md-6">
                  <input type="text" id="nid_number" className="form-control" name="nid-number" />
                </div>
              </div>
              <div className="col-md-6 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form></div>
        </div>
      </div>
    </div>
  </div>
</main> */}


        </>
    )
}

export default Form;