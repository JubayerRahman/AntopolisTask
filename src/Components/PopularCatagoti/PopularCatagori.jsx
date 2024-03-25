import { IoPizzaOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";
import { TbSalad } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import {Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import pizza1 from "../../assets/pizza 1.png"
import pizza2 from "../../assets/pizza 2.png"
import pizza3 from "../../assets/pizza 3.png"
import pizza4 from "../../assets/pizza 4.png"


const PopularCatagori = () => {
  return (
    <div className='populatCategori'>
      <h1>Our Popular Categories</h1>
      <div className="buttons">
        <button className="ativeButton"><span><IoPizzaOutline/></span> Pizzas</button>
        <button><span><PiHamburger/></span> Burgers</button>
        <button><span><TbSalad/></span> Salads</button>
        <button><span><IoFastFoodOutline/></span> Combos</button>
      </div>
        <div className="forDasktop">
        <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={4}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('')}
      >
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza1} alt="" /> 
            <div>
                <h2>Pepperoni Pizza</h2> 
                <p>Di napoles</p>
                <h3>$11,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza2} alt="" /> 
            <div>
                <h2>Pepperoni Pizza</h2> 
                <p>Di napoles</p>
                <h3>$13,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza3} alt="" /> 
            <div>
                <h2>Vegetarian Pizza</h2> 
                <p>Cosa di Mario</p>
                <h3>$12,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza4} alt="" /> 
            <div>
                <h2>Mediterranean Pizza</h2> 
                <p>Milano</p>
                <h3>$15,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza1} alt="" /> 
            <div>
                <h2>Pepperoni Pizza</h2> 
                <p>Di napoles</p>
                <h3>$11,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza2} alt="" /> 
            <div>
                <h2>Pepperoni Pizza</h2> 
                <p>Di napoles</p>
                <h3>$13,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza3} alt="" /> 
            <div>
                <h2>Vegetarian Pizza</h2> 
                <p>Cosa di Mario</p>
                <h3>$12,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza4} alt="" /> 
            <div>
                <h2>Mediterranean Pizza</h2> 
                <p>Milano</p>
                <h3>$15,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
        <div className="forMobile">
        <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('')}
      >
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza1} alt="" /> 
            <div>
                <h2>Pepperoni Pizza</h2> 
                <p>Di napoles</p>
                <h3>$11,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza2} alt="" /> 
            <div>
                <h2>Pepperoni Pizza</h2> 
                <p>Di napoles</p>
                <h3>$13,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza3} alt="" /> 
            <div>
                <h2>Vegetarian Pizza</h2> 
                <p>Cosa di Mario</p>
                <h3>$12,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza4} alt="" /> 
            <div>
                <h2>Mediterranean Pizza</h2> 
                <p>Milano</p>
                <h3>$15,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza1} alt="" /> 
            <div>
                <h2>Pepperoni Pizza</h2> 
                <p>Di napoles</p>
                <h3>$11,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza2} alt="" /> 
            <div>
                <h2>Pepperoni Pizza</h2> 
                <p>Di napoles</p>
                <h3>$13,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza3} alt="" /> 
            <div>
                <h2>Vegetarian Pizza</h2> 
                <p>Cosa di Mario</p>
                <h3>$12,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="card"> 
            <img src={pizza4} alt="" /> 
            <div>
                <h2>Mediterranean Pizza</h2> 
                <p>Milano</p>
                <h3>$15,99</h3>
                <button>Add to cart</button>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default PopularCatagori
