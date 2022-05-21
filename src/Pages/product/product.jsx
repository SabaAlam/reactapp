import React, { useEffect, useState } from 'react'
import Navbar from '../../component/navbar'
import Men from '../../Men/men'
import kid from '../../Kids/Kid'
import Women from '../../Women/Women'
import "./style.css"

export default function Product(props) {
  // console.log(props,"test product page")
  const {api,cat,cls}=props.data
  console.log(api,cat,cls,"test product page")
  const [currentData, setcurrentData] = useState(Men[cls][cat])
 useEffect(() => {
 switch(props.data.api){
  case "Men" : {
    
    setcurrentData(Men[cls][cat])
  }

      break
      case "Women" : {
  
        setcurrentData(Women[cls][cat])
    }

        break
        case "Kid" :{setcurrentData(kid[cls][cat])
     }

          break 
 }
 }, [])
 console.log(currentData,"test c data api")
  return (
    <div>
        <Navbar/>
        <div className="container-fluid">
            <div className="container p-0 m-0 py-3">
                <div className="col-lg-12">
                    <h2 className='px-3 pr_p1'>MEN SANDALS</h2>
                </div>
            </div>
            <div className="container py-3 ">
                <div className="col-lg-12 ">
                <div className="row justify-content-center " >
                <div className="col-lg-3  d-flex justify-content-around align-items-center">
                    <p className='mt-2' style={{fontWeight:"bold",fontSize:"0.8rem" }}>Refine by</p>
                    <div class="btn-group  w-75">
  <button type="button" className="btn pr_same border w-100 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Price
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
                </div>
                <div className="col-lg-3   d-flex justify-content-around align-items-center">
                <div class="btn-group   w-100">
  <button type="button" className="btn w-100 pr_same border px-5 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Size
  </button>
  <div className="dropdown-menu px-3 dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
                </div>
                <div className="col-lg-3   d-flex justify-content-around align-items-center">
                <div class="btn-group w-100 d-flex justify-content-around">
  <button type="button" className="btn pr_same w-100 border dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Featured
  </button>
  <div className="dropdown-menu px-3 dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
                </div>
            </div>
            </div>
        </div>
        </div>
       <div className="row">
       {
          currentData.map((obj)=>{
return  <div className=" col-lg-4  col-sm-12 col-12">
  {/* <Link to="/product"  onClick={()=>{handleClick(ele,"Shoes")}}> */}
<div className="over">
  <img src={obj.Image.pic1} alt="" className='img-fluid imgtohover'/>
</div>

<h6 className='mt-3 text-center'>{props.data.api}{props.data.cat}</h6> 
{/* </Link> */}
</div>

          })
        }
       </div>
    </div>
  )
}
