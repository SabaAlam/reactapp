import React from 'react'
import img1 from "../Assets/images/Home/Ndure_130x30_80ad96b2-a180-4493-921e-078d0aa786d5.png"
import { BsSearch } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AiOutlineHeart,AiOutlineShoppingCart } from 'react-icons/ai';
import "./navbar.css"
export default function Navbar() {
  return (
    <div>
        <div className="container-fluid  text-center text-white dan">
    <p className='para1 py-1 p-0 m-0'>Free Shipping on all orders above Rs.2000. Nationwide delivery within 3-5 working days.</p>
</div>
<div className="container-fluid  border ">
    <div className="row">
        <div className="col-lg-4 d-flex  align-items-center">
            <p className='p1 mx-1'><Link to="/Nextpage"   style={{textDecoration:"none",color:"silver",}}>Men</Link><span></span>  </p>
            <p className='p1 mx-1'><Link to="/Nextpage"   style={{textDecoration:"none",color:"silver"}}>Women</Link>  <span></span></p>
            <p className='p1 mx-1'> <Link to="/Nextpage"   style={{textDecoration:"none",color:"silver"}}>Kids</Link>  </p>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
        <Link to="/">    <img src={img1} alt="" className='py-3' /></Link>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
        <div class="input-group mb-3 w-75">
  <input type="text" class="form-control mt-3" style={{borderRight:"none",boxShadow:"none",borderBottom:"1px solid black",borderTop:"1px solid black",borderLeft:"1px solid black"}} placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary mt-3" style={{borderLeft:"1px solid white",borderTop:"1px solid black",borderBottom:"1px solid black",borderRight:"1px solid black"}} type="button" id="button-addon2"><BsSearch/></button>
</div>
<FiUser style={{fontSize:"1.5rem"}}/>
<AiOutlineHeart style={{fontSize:"1.5rem"}}/>
<AiOutlineShoppingCart style={{fontSize:"1.5rem"}}/>
        </div>
    </div>
</div>
<div className="container-fluid stick  p-0 m-0">
    <div className="row">
    <div className="col-lg-4  "></div>
    <div className="col-lg-4  ">
        <ul style={{listStyle:"none",fontSize:".7rem",height:"100%"}} className="d-flex justify-content-around align-items-center">
            <li className='li'>EID'22</li>
            <li className='li'>SHOES</li>
            <li className='li'>CLOTHING</li>
            <li className='li'>ACCESSORIES</li>
            <li className='li'>SALE</li>
        </ul>
    </div>
    <div className="col-lg-4  "></div>
</div>
</div>
    </div>
    
  )
}
