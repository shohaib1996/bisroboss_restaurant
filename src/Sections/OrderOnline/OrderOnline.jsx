import SectionTitle from "../../Utils/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from "../../../public/assets/home/slide1.jpg"
import slide2 from "../../../public/assets/home/slide2.jpg"
import slide3 from "../../../public/assets/home/slide3.jpg"
import slide4 from "../../../public/assets/home/slide4.jpg"
import slide5 from "../../../public/assets/home/slide5.jpg"
console.log(slide1);




const OrderOnline = () => {
    const heading = "ORDER ONLINE";
    const subHeading = "---From 11:00am to 10:00pm---"
    return (
        <div className="mt-20 max-w-6xl mx-auto">
            <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
            <div className="mt-12 mb-12">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <img src={slide1} alt="" />
                        <p className="font-cinzel text-2xl text-[#FFF] text-center -mt-12 pb-16">SALAD</p>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <p className="font-cinzel text-2xl text-[#FFF] text-center -mt-12 pb-16">PIZZA</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <p className="font-cinzel text-2xl text-[#FFF] text-center -mt-12 pb-16">SOUP</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <p className="font-cinzel text-2xl text-[#FFF] text-center -mt-12 pb-16">DESSERT</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <p className="font-cinzel text-2xl text-[#FFF] text-center -mt-12 pb-16">SALAD</p>
                    </SwiperSlide>



                </Swiper>
            </div>

        </div>
    );
};

export default OrderOnline;