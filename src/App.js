import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@cloudscape-design/global-styles/index.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import DataInput from './Components/DataInput';

function App() {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Mousewheel]}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            mousewheel={true}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <DataInput />
            </SwiperSlide>
            <SwiperSlide>
                <DataInput />
            </SwiperSlide>
        </Swiper>
    );
}

export default App;
