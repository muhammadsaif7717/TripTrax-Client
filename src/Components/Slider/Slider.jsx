// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Slide, Zoom } from "react-awesome-reveal";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    return (
        <Zoom>
            <div className='h-[30vh] md:h-[45vh] lg:h-[70vh] relative flex justify-center items-center   rounded-xl'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                effect='fade'
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >


                <SwiperSlide>
                    <img src="https://i.postimg.cc/bvW9VMxm/datingscout-Y2-YZQhov-T-A-unsplash.jpg" className="w-full brightness-75 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/LsnVTR1q/dilip-poddar-8-U6c0-Buvl-As-unsplash.jpg" className="w-full brightness-75 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/bvW9VMxm/datingscout-Y2-YZQhov-T-A-unsplash.jpg" className="w-full brightness-75 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.postimg.cc/kgMs2WMv/casey-horner-J2-Non-I158-H0-unsplash.jpg" className="w-full brightness-75 rounded-xl h-[30vh] md:h-[45vh] lg:h-[70vh]" />
                </SwiperSlide>

            </Swiper>
            <div className='absolute space-y-2 md:space-y-5 py-2 px-0 md:py-10 md:px-0 lg:py-20 bg-white bg-opacity-80 rounded-xl text-center w-[75%] z-20'>
                <Slide direction='down'>
                <h1 className=" text-xl md:text-4xl lg:text-5xl font-bold text-blue-600 ">Welcome to TripTrax</h1>
                <p className=' text-sm md:text-[15px] lg:text-xl px-1 md:w-2/3 mx-auto'>Discover extraordinary journeys with expert guides. Tailored tours for every traveler. Book now for unforgettable experiences worldwide.</p>
                </Slide>
            </div>
        </div>
        </Zoom>
    );
};

export default Slider;