import React from 'react';
import {Redirect,Route} from 'react-router-dom';

const PrivatRoute = ({component:Component, ...rest}) =>{

    const auth = sessionStorage.getItem('Token');
         
    return(
        <Route {...rest} render={props =>(
           auth ? 
             <Component {...props}/>
            :
            <Redirect to={{pathname:'/',}}/>           
        )
       }
       />
    )
}

export default PrivatRoute;