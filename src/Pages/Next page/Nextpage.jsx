import React, { useEffect, useState } from 'react'
import "./style.css"
import Footer from '../../component/footer'
import Men from '../../Men/men'
import Women from '../../Women/Women'
import kid from '../../Kids/Kid'
import Navbar from "../../component/navbar"
import { Link } from 'react-router-dom'
import img28 from "../../Assets/images/menpage/foot.webp"
export default function  Nextpage  (props)  {
  // console.log(props,"test next props");
  const [curent, setcurent] = useState(Men)
  const [shoecatagories, setshoecatagories] = useState([])
  const [apprelcatagories, setapprelcatagories] = useState([])

  useEffect(()=>{

    switch  (props.data.data)
    {

      case "Men" : {setcurent(Men)
      setshoecatagories(Object.keys(Men.Shoes))
      setapprelcatagories(Object.keys(Men.Apparel))}

        break
        case "Women" : {setcurent(Women)
      setshoecatagories(Object.keys(Women.Shoes))
      setapprelcatagories(Object.keys(Women.Apparel))}

          break
          case "Kid" :{setcurent(kid)
        setshoecatagories(Object.keys(kid.Shoes))
        setapprelcatagories(Object.keys(kid.Apparel))}

            break        
    }
    // var newarr=shoecatagories
// var obj=curent.Shoes
// var data=Object.keys(obj)
// setshoecatagories(data)

// // var newappr=shoecatagories
// var objapp=curent.Apparel
// var dataapp=Object.keys(objapp)
// setapprelcatagories(dataapp)

// console.log(data,'test keys');
  },[])


// var newappr=shoecatagories
// var objapp=curent.Shoes
// var data=Object.keys(objapp)
// console.log(data,'test keys')

// }

const handleClick=(ele,cls)=>{
  var cat=props.data.data
  props.data.transfer2(ele,cls,cat)
  // alert(`i am clicked ${ele}`)
  // e.preventDefault()
// console.log(ele,"test it")
}
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
      <div className="row">
        {curent.Hero.map((obj)=>{
          // console.log(obj.wall1);
       return   <div className="col-lg-12 p-0 m-0 hero ">
          <img src={obj.wall1} alt="" className='img-fluid' />
          <div className="Btn-group ">
          <button className="btn2 py-2 hero_btn"  style={{textDecoration:"none",fontWeight:"bold"}}>SHOES</button>
          <button className="btn2 py-2 hero_btn"  style={{textDecoration:"none",fontWeight:"bold"}}>APPARELS</button>
          <button className="btn2 py-2 hero_btn"  style={{textDecoration:"none",fontWeight:"bold"}}>ACCESSORIES</button>
        </div>
        </div>
        })}
        
      </div>
    </div>
    <div className="container-fluid py-4">
        <div className="row">
            <div className="col-lg-6 ">
                <div className="over">
                <div className="container  img14">

                </div>
                </div>
            </div>
            <div className="col-lg-6 ">
            <div className="over">
                <div className="container img15">

                </div>
                </div>
            </div>

        </div>
    </div>
    <div className="container-fluid py-1 ov nd ">
      <div className="row  py-2">
      <h4 className='p-0 m-0' style={{fontWeight:"bold"}}>{curent.pagedata.title}</h4>
      </div>
      
      <div className="row py-4  justify-content-around align-items-center">
        {
       shoecatagories.map((ele)=>{
return <div className=" col-md-2  col-sm-12 col-12">
  <Link to="/product"  onClick={()=>{handleClick(ele,"Shoes")}}>
<div className="over">
  <img src={curent.Shoes[ele][0].Image.pic1} alt="" className='img-fluid imgtohover'/>
</div>

<h6 className='mt-3 text-center'>{ele}</h6> 
</Link>
</div>

{/* <h1>{ele}</h1> */}
       })
        }
      </div>
    </div>

    <div className="container-fluid py-1   ov nd">
      <h4 className='py-2'><b>{curent.pagedata.title2}</b></h4>
      <div className="row py-4  justify-content-around align-items-center">
    
      {
       apprelcatagories.map((ele)=>{
return <div className=" col-md-2  col-sm-12 col-12">
  <Link to="/product" onClick={()=>{handleClick(ele,"Apparel")}}>
<div className="over">
  <img src={curent.Apparel[ele][0].Image.pic1} alt="" className='img-fluid imgtohover'/>
</div>

<h6 className='mt-3 text-center'>{ele}</h6> 
</Link>
</div>

{/* <h1>{ele}</h1> */}
       })
        }
      </div>
    </div>
    <div className="container-fluid  mt-4 exit">
<img className='img-fluid' src={img28} alt="" />
    </div>
    <Footer/>

    

    </>
  )
}
