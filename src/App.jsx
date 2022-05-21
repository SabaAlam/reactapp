import React,{useState} from 'react'
// import Men from './Men/men'
// import kid from './Kids/Kid'
// import Women from './Women/Women'
import Home from './Pages/Home/Home'
import Nextpage from './Pages/Next page/Nextpage'
import Product from './Pages/product/product';
import { Routes, Route } from "react-router-dom";
export default function App() {
const  [data, setdata] = useState("Men")
const [productprop, setproductprop] = useState()
  function transfer (name){
    setdata(name)
    console.log(name);

  }
  function transfer2(cat,cls,api){
  console.log(api,"api",cat,"apptestapi")
  setproductprop({cat,api,cls})

  }
  return (
    <>

    {/* <Product/> */}

    <Routes>
              <Route exact path="/" element={<Home newdata={transfer}/> }></Route>
              <Route path="/Nextpage" element={<Nextpage data={{data,transfer2}} />}></Route>
              <Route path="/product" element={<Product data={productprop}/>}></Route>
              
            
            </Routes>
        </>
  )
}


