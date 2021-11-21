import React, {useState,useEffect}from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'
import Customer from '../components/Customer'

const Customers = () => {
    const [customers,setCustomers] = useState([])

        useEffect (() => {
            async function fetchDate(){
                let result = await fetch(" https://win21-demo.azurewebsites.net/api/customers")
                let data = await result.json()
                setCustomers(data)
                
            }
      fetchDate()
    }, [])
    return (
        <div>
            <Navbar/>
            <div className="container mt-4">
            <NavLink to="/customers/Add"> Skapa konto</NavLink>
            <div className="row row-cols-md-4 g-4 mt-1 mb-5">
                {
                    customers.map(customer => (<Customer key={customer.id} customer={customer}/>))
                }
            </div>
        </div>
        </div>
    )
}

export default Customers
