import React from 'react'



const Customer = ({customer}) => {

    return (
        <div className="col">
        <div className="card h-90 ">
          <img  src =" https://th.bing.com/th/id/R.49d1aea5dcc73ebc47d368b2009a0c5d?rik=kZd1NTMsUg4u2w&pid=ImgRaw&r=0" className="card-img-top" alt="..."/>
          <div className="card-body text center">
            <h5 className="card-title">{customer.fullName}</h5>
            <p className="card-text">{customer.stad}</p>
            <p className="card-text">{customer.id}</p>
          
           
          </div>
        </div>
        </div>
    )
}

export default Customer
