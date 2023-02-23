<template>
    <div>
        <div></div>
        <!-- <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
        </swiper> -->
    </div>
  </template>


  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { Navigation } from 'swiper';
    // swiper ----

    import {ref, onMounted} from "vue"
    import filmService from "../services/Film/FilmService"
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      props: ['title', 'genreID'],
      setup() {
          onMounted(() => {
              console.log(genres.value)
            })

        return {
          modules: [Navigation],
        };
      },
    };
  </script>
  