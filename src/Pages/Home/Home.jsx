import React from 'react'
import "./Home.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Link } from 'react-router-dom';
import Footer from '../../component/footer'
import H_nav from "../../component/h_nav"
import { EffectFade,Pagination,Autoplay,Navigation } from "swiper";
import Img1 from "../../Assets/images/slider2nd/one.jpg"
import Img2 from "../../Assets/images/slider2nd/slidertwo.jpg"
import Img3 from "../../Assets/images/slider2nd/sliderthree.jpg"
import Img4 from "../../Assets/images/slider2nd/sliderfour.jpg"
import Img5 from "../../Assets/images/slider2nd/sliderfive.jpg"
import Img6 from "../../Assets/images/slider2nd/slidersix.jpg"
import Img7 from "../../Assets/images/slider2nd/sliderseven.jpg"
import Img8 from "../../Assets/images/slider2nd/slidereight.jpg"
export default function Home  (props)  {
//  console.log(props.newdata,"test");
 
 const handleClick =(ele)=>{
  // console.log(ele,"app test");
  props.newdata(ele)
 }

  return (
    <>
<H_nav/>


   
    
{/*  ------------slider--------------- */}
<div className="container-fluid Home-slider1  p-0 m-0">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // effect={"fade"}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        navigation={{
            clickable: true,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade,Autoplay,Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="three photo">
              <div className="container cont3 d-flex justify-content-end flex-column">
                <div className="row  justify-content-center">
                  <div className="col-lg-3 "></div>
                    <div className="col-lg-5 d-flex justify-content-around align-items-center" >
                      <button className="btn2  py-2" onClick={(()=>{handleClick("Men")})} ><Link to="Nextpage"   style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>MEN</Link></button>
                      <button className="btn2  py-2" onClick={(()=>{handleClick("Women")})} ><Link to="Nextpage"   style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>WOMEN</Link></button>
                      <button className="btn2  py-2" onClick={(()=>{handleClick("Kid")})} ><Link to="Nextpage"   style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>KID</Link></button>
                    </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className="three photo1">
            <div className="container cont3 d-flex justify-content-end flex-column">
              <div className="row justify-content-center">
                <div className="col-lg-3"></div>
                <div className="col-lg-5 d-flex justify-content-around align-items-center" >
                      <button className="btn2  py-2"><Link to="men"   style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>MEN</Link></button>
                      <button className="btn2  py-2"><Link to="men"   style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>WOMEN</Link></button>
                      <button className="btn2  py-2"><Link to="men"   style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>KID</Link></button>
                    </div>
                <div className="col-lg-3"></div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="three photo2">
            <div className="container cont3 d-flex justify-content-end flex-column">
              <div className="row justify-content-center">
                <div className="col-lg-3"></div>
                <div className="col-lg-5 d-flex justify-content-around align-items-center" >
                      <button className="btn2  py-2"><Link to="men"   style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>MEN</Link></button>
                      <button className="btn2  py-2"><Link to="men"   style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>WOMEN</Link></button>
                      <button className="btn2  py-2"><Link to="men"   style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>KID</Link></button>
                    </div>
                <div className="col-lg-3"></div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="three photo3">
            <div className="container cont3 d-flex justify-content-end flex-column">
              <div className="row justify-content-center">
                <div className="col-lg-3"></div>
                <div className="col-lg-5 d-flex justify-content-around align-items-center" >
                      <button className="btn2  py-2"><Link to="men"   style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>MEN</Link></button>
                      <button className="btn2  py-2"><Link to="men"   style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>WOMEN</Link></button>
                      <button className="btn2  py-2"><Link to="men"   style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>KID</Link></button>
                    </div>
                <div className="col-lg-3"></div>
              </div>
            </div>
          </div>
          </SwiperSlide>  
      </Swiper>
      </div>

{/* __________________________________ */}
<div className="container-fluid new_slide mt-4 ">
<Swiper navigation={true}  
    //  slidesPerView={4}
     spaceBetween={30}
     pagination={{
       clickable: true,
     }}
     autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
     modules={[Navigation,Autoplay]}
     className="mySwiper"
     breakpoints= {{
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    }
  }
     >
        <SwiperSlide>
            <div className="card main-div" style={{width: "30rem"}}>
              <div className="inner rounded text-light py-1"> <p> - 30%</p></div>
  <img src={Img1} className="card-img-top " alt="..."/>
  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">
    <small className="card-text"> Girls Slip On Sneakers</small>
    <div className='own-rs'><p className='py-2 px-1'>PKR </p></div>
    <p className='text-danger own-price'> <b>1679</b>  <del className='own_price_del'>2399 PKR</del></p>
  </div>
  
</div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="card main-div" style={{width: "30rem"}}>
              <div className="inner rounded text-light py-1"> <p> - 30%</p></div>
  <img src={Img2} className="card-img-top" alt="..."/>
  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">

    <small className="card-text"> Girls Velcro Strap Joggers</small>
    <div className='own-rs'><p className='py-2 px-1'>PKR </p></div>
    <p className='text-danger own-price'> <b>1259</b>  <del className='own_price_del'>1799 PKR</del></p>
  </div>
  
</div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="card main-div" style={{width: "30rem"}}>
              <div className="inner rounded text-light py-1"> <p> - 30%</p></div>
  <img src={Img3} className="card-img-top" alt="..."/>
  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">

    <small className="card-text"> Girls Running Shoes</small>
    <div className='own-rs'><p className='py-2 px-1'>PKR </p></div>
    <p className='text-danger own-price'> <b>1119</b>  <del className='own_price_del'>1599 PKR</del></p>
  </div>
  
</div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="card main-div" style={{width: "30rem"}}>
              <div className="inner rounded text-light py-1"> <p> - 30%</p></div>
  <img src={Img4} className="card-img-top" alt="..."/>
  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">

    <small className="card-text">BEADED CHAPPALS</small>
    <div className='own-rs'><p className='py-2 px-1'>PKR </p></div>
    <p className='text-danger own-price'> <b>489</b>  <del className='own_price_del'>6699 PKR</del></p>
  </div>
  
</div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="card main-div" style={{width: "30rem"}}>
              <div className="inner rounded text-light py-1"> <p> - 30%</p></div>
  <img src={Img5} className="card-img-top" alt="..."/>
  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">

    <small className="card-text"> Funky Sneakers </small>
    <div className='own-rs'><p className='py-2 px-1'>PKR </p></div>
    <p className='text-danger own-price'> <b>1049</b>  <del className='own_price_del'>1499 PKR</del></p>
  </div>
  
</div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="card main-div" style={{width: "30rem"}}>
              <div className="inner rounded text-light py-1"> <p> - 30%</p></div>
  <img src={Img6} className="card-img-top" alt="..."/>
  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">

    <small className="card-text">GIRLS BALLERINA</small>
    <div className='own-rs'><p className='py-2 px-1'>PKR </p></div>
    <p className='text-danger own-price'> <b>1399</b>  <del className='own_price_del'>1999 PKR</del></p>
  </div>
  
</div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="card main-div" style={{width: "30rem"}}>
              <div className="inner rounded text-light py-1"> <p> - 30%</p></div>
  <img src={Img7} className="card-img-top" alt="..."/>
  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">

    <small className="card-text">INFANT SOFT SHOES</small>
    <div className='own-rs'><p className='py-2 px-1'>PKR </p></div>
    <p className='text-danger own-price'> <b>1189</b>  <del className='own_price_del'>1699 PKR</del></p>
  </div>
  
</div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="card main-div" style={{width: "30rem"}}>
              <div className="inner rounded text-light py-1"> <p> - 30%</p></div>
  <img src={Img8} className="card-img-top" alt="..."/>
  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">

    <small className="card-text"> Girls Slip On Sneakers</small>
    <div className='own-rs'><p className='py-2 px-1'>PKR </p></div>
    <p className='text-danger own-price'> <b>1169</b>  <del className='own_price_del'>1699 PKR</del></p>
  </div>
  
</div>
        </SwiperSlide>
      
       
      </Swiper>
</div>
{/*  ************************shop Men*********************** */}
<div className="container-fluid mt-5 d-flex justify-content-center ">
    <div className="row wid">
    <div className="col-3 d-flex flex-column justify-content-center align-items-center py-5 text-center ">
        <h2 className='py-3'> <b>SHOP MEN</b> </h2>
        <button className='btn1 py-2'>VIEW ALL CATEGORIES</button>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center ">
        <div className="over">
        <div className="container img2 "></div>
        </div>
        <h4 className='py-2 same'>SHOES</h4>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center ">
        <div className="over">
        <div className="container img3"></div>
        </div>
        <h4 className='py-2 same'>APPAREL</h4>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center">
        <div className="over">
        <div className="container img4 "></div>
        </div>
        <h4 className='py-2 same'>ACCESSORIES</h4>
    </div>
    </div>
</div>
{/*  ************************shop women*********************** */}

<div className="container-fluid mt-5 d-flex justify-content-center ">
    <div className="row wid">
    <div className="col-3 d-flex flex-column justify-content-center align-items-center  py-5 text-center ">
        <h2 className='py-3'> <b>SHOP WOMEN</b> </h2>
        <button className='btn1 py-2'>VIEW ALL CATEGORIES</button>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center ">
        <div className="over">
        <div className="container img5"></div>
        </div>
        <h4 className='py-2 same'>SHOES</h4>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center">
        <div className="over">
        <div className="container img6"></div>
        </div>
        <h4 className='py-2 same'>APPAREL</h4>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center">
        <div className="over">
        <div className="container img7"></div>
        </div>
        <h4 className='py-2 same'>ACCESSORIES</h4>
    </div>
    </div>
</div>

{/*  ************************shop kids*********************** */}
<div className="container-fluid mt-5 d-flex justify-content-center ">
    <div className="row wid">
    <div className="col-3 d-flex flex-column justify-content-center align-items-center  py-5 text-center ">
        <h2 className='py-3'><b>SHOP KIDS</b></h2>
        <button className='btn1 py-2'>VIEW ALL CATEGORIES</button>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center ">
        <div className="over">
        <div className="container img8"></div>
        </div>
        <h4 className='py-2 same'>SHOES</h4>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center ">
        <div className="over">
        <div className="container img9"></div>
        </div>
        <h4 className='py-2 same' >APPAREL</h4>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center ">
        <div className="over">
        <div className="container img10"></div>
        </div>
        <h4 className='py-2 same'>ACCESSORIES</h4>
    </div>
    </div>
</div>

{/*  ************************shop sale*********************** */}
<div className="container-fluid mt-5 d-flex justify-content-center ">
    <div className="row wid">
    <div className="col-3 d-flex flex-column justify-content-center align-items-center  py-5 text-center ">
        <h2 className='py-3'> <b>SHOP SALE</b> </h2>
        <button className='btn1 py-2'>VIEW ALL CATEGORIES</button>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center ">
        <div className="over">
        <div className="container img11"></div>
        </div>
        <h4 className='py-2 same'>MEN</h4>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center ">
        <div className="over">
        <div className="container img12"></div>
        </div>
        <h4 className='py-2 same'>WOMEN</h4>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 text-center ">
        <div className="over">
        <div className="container img13"></div>
        </div>
        <h4 className='py-2 same'>KIDS</h4>
    </div>
    </div>
</div>
<Footer/>


</>
  )
}
