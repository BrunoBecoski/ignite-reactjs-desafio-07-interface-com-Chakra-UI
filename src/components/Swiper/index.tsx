import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { SwiperSlide, Swiper as SwiperContainer } from 'swiper/react';
import { BoxSlide } from './BoxSlide';

import 'swiper/swiper-bundle.css'

SwiperCore.use([ Navigation, Pagination, A11y ]);

export function Swiper() {
  return (
    <SwiperContainer
      navigation
      pagination={{ clickable: true }}
      loop= { true }
      style={{ 
        '--swiper-theme-color': '#ffba08',
        '--swiper-navigation-size': '30px'
      }}
    >

      <SwiperSlide>
        <BoxSlide 
          href="asia"
          title="Ásia"
          url="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1240&q=80"
        />
      </SwiperSlide>

      <SwiperSlide>
        <BoxSlide
          href="america"
          title="América"
          url="https://images.unsplash.com/photo-1536031696538-924fe11c7037?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&auto=format&fit=crop&w=1240&q=80"
        />
      </SwiperSlide>

      <SwiperSlide>
        <BoxSlide
          href="africa"
          title="África"
          url="https://images.unsplash.com/photo-1562842523-6d492ddc3e25?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&auto=format&fit=crop&w=1240&q=80"
        />
      </SwiperSlide>

      <SwiperSlide>
        <BoxSlide
          href="europe"
          title="Europa"
          url="https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1240&q=80"
        />
      </SwiperSlide>

      <SwiperSlide>
        <BoxSlide
          href="oceania"
          title="Oceania"
          url="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1240&q=80"
        />
      </SwiperSlide>

    </SwiperContainer>
  )
}