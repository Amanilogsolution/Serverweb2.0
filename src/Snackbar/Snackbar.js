export const warning = (p) => {
    return (
        <div
            className="container p-2 ml-auto fixed-top"
            id="snackalert" >
            <div className="row gutters  ">
                <div className=" col-lg-4 col-md-2 " style={{ margin: "auto" }}>
                    <div className="alert alert-success fade show d-flex" role="alert" style={{ padding: "5px", border: "2px solid red" }}>
                        <p className="px-0 mx-0 py-0 my-0" style={{ marginRight: "0px", padding: "0px", border: "2px solid red" }}>
                            {p}
                        </p>
                        <button type="button" className="close btn" data-dismiss="alert" aria-label="Close" style={{ marginRight: "0px", border: "2px solid red" }}>
                            <span aria-hidden="True">ok</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>



    )
}

export const success = () => {
    return (
        <>
            success
        </>
    )
}

