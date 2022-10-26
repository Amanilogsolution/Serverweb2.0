import React from 'react'
import './404.css'
import logo from '../../image/404.png'

export const PageNotFound = () => {
  return (
    <>
    <div className='pnf'>
       <h1>Page Not Found</h1>
       <img style={{width:"400px"}} src={logo}/>
    </div>
    </>
  )
}
