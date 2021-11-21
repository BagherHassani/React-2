
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AddCustomer from './vyer/AddCustomer';
import Customers from './vyer/Customers';



 function App() {
// const [Customers, setCustomers] =  useState([])
// useEffect(() => {

//    async function fetchDate (){
//     const res = await fetch("https://win21-demo.azurewebsites.net/api/customers")
//     setCustomers(await res.json())

//   }
//   fetchDate()
// }, [])





  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/customers/add" element={<AddCustomer/>} />
    <Route exact path="/customer" element = {<Customers/>}/>
    <Route exact path="/" element = {<Customers/>}/>
   
  

   
   
    </Routes>
    </BrowserRouter>
  );
  }

export default App;

