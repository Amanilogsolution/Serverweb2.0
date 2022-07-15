import './footer.css';
import React from 'react';
function Footer() {
    return (
        <>
        <footer className='footer-div'>
            <div className="card text-center" >
                <div className="card-header bg-dark text-light">Featured</div>
                <div className="card-body bg-secondary">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                        With supporting text below as a natural lead-in to additional
                        content.
                    </p>
                </div>
                <div className="card-footer bg-dark text-light">2 days ago</div>
            </div>
            </footer>
        </>
    )
}

export default Footer;