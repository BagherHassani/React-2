import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { uuid} from 'react-dom'
import Navbar from '../components/Navbar'


const AddCustomer  = () => {
   

        const nav= useNavigate()
       
        const [fullName,setFullName] = useState('')
        const [stad,setStad] = useState('')
        const [fullNameError,setFullNameError] = useState('')
        const [stadError,setStadError] = useState('')

        const validate = ( value, minLength ) =>{
            if( value.length < minLength )
                return 'is-invalid d-block'
                else
                return ''
        }
        const fullNameHandler = (e) =>{
            setFullName (e.target.value)
            setFullNameError(validate(e.target.value, 5))
        }
        const stadHandler = (e) =>{
            setStad (e.target.value)
            setStadError(validate(e.target.value, 3))
            

        }
    



   const submitHandler = (e) => {
            e.preventDefault()
       
            if(fullName.length !== 0 && stad.length !== 0){
                
              let me =  fetch(" https://win21-demo.azurewebsites.net/api/customers",{ 
                method: 'post',
                headers: {'Accept': 'application/json'},
                body: JSON.stringify ({id: uuid,fullName:'bagher',stad}),
                
              
            })  
            .then(res => {
                if(res.status === 201)
                nav('/Customer')
           
            })   
            console.log(me)
     }    
   }


    return (
        <div>
        <Navbar/>
         <div className=" container mb-5">
            <div className ="d-flex justify-content-center align-items-center">
                <div className="col-12 col-sm-10 col-lg-6 border p-3 shadow-sm">
                    <form className="p-4" onSubmit={submitHandler }>
                        <div className="mb-3">
                        <label for="fullName" className="form-label">för- och efternamn</label>
                        <input value={fullName} onChange ={fullNameHandler } type="text" className="form-control form-control-lg" id="fullName" aria-describedby="fullNameHelp"/>
                        <div id="fullName-error" className ={`invalid-feedback ${fullNameError}`}> <small>Du måste ange ditt  för- och efternamn </small></div>
                       
                </div>
                        <div className="mb-3">
                        <label for="stad" className="form-label">Stad</label>
                        <input value={stad} onChange ={stadHandler} type="text" className="form-control" id="stad"/>
                        <div id="stad-error" className={`invalid-feedback ${stadError}`}> <small> Ange din stad</small></div>
                </div>
                   <div className= "d-grid">
                   <button type="submit" className="btn btn-lg btn-dark">Skapa konto</button>
                   </div> 
                    </form>
                </div>
             </div>
         </div> 
     </div>
    )
}


export default AddCustomer 

