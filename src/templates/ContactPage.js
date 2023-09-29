import React from 'react'
import '../static/main.css';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';


function ContactPage() {
return (
    <div>
        <Navbar></Navbar>
        <div className='content'>
        <h1 className='roboto white'>Contact.</h1>   
        </div> 
        <Footer></Footer>

    </div>
    

    )
}

export default ContactPage