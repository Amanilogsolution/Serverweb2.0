import React,{useState,useEffect} from 'react'
import './WcUser.css'
import { getUserdetails, updateUserdetails } from '../../../api/index'
import { BsEmojiLaughing } from 'react-icons/bs';




export default function WcUser() {

    const [details, setDetails] = useState({})

    useEffect(() => {
        const fetchdata = async () => {
           const org = localStorage.getItem('Database')
           const Userdetails = localStorage.getItem('UserId')
  
           const Userdata = await getUserdetails(org, Userdetails)
           setDetails(Userdata)
        }
        fetchdata();
  
     }, [])

    const myTimeout = setTimeout(myGreeting, 9100);

    function myGreeting() {
      document.getElementById("wrappar").style.display="none"
    }

  return (
    <>
        <div id='wrappar' className='wrappar'>
            <ul className='dynamic-text'>
                <li><span> <span style={{color:"#4e4f52"}}>Welcome </span> {details.employee_name} <BsEmojiLaughing style={{marginTop:"-7px"}}/> </span></li>
            </ul>
        </div>
    </>
  )
}
