import { Component, OnInit } from '@angular/core';
// import $ from "../../utils/jquery-1.11.2.min.js"
// import Swiper from "../../utils/swiper-3.3.1.min.js"

@Component({
  selector: 'app-list-main',
  templateUrl: './list-main.component.html',
  styleUrls: ['./list-main.component.css']
})
export class ListMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // var mySwiper = new Swiper('#topNav', {
    //   freeMode: true,
    //   freeModeMomentumRatio: 0.5,
    //   slidesPerView: 'auto',
    // });
    // var swiperWidth = mySwiper.container[0].clientWidth
    // var maxTranslate = mySwiper.maxTranslate();
    // var maxWidth = -maxTranslate + swiperWidth / 2
    // $(".swiper-container").on('touchstart', function(e) {
    //   e.preventDefault()
    // })
    // mySwiper.on('tap', function(swiper, e) {
    //   e.preventDefault()
    //   var slide = swiper.slides[swiper.clickedIndex]
    //   var slideLeft = slide.offsetLeft
    //   var slideWidth = slide.clientWidth
    //   var slideCenter = slideLeft + slideWidth / 2
    //   // 被点击slide的中心点
    //   mySwiper.setWrapperTransition(300)
    //   if (slideCenter < swiperWidth / 2) {
    //     mySwiper.setWrapperTranslate(0)
    //   } else if (slideCenter > maxWidth) {
    //     mySwiper.setWrapperTranslate(maxTranslate)
    //   } else {
    //     var nowTlanslate = slideCenter - swiperWidth / 2
    //     mySwiper.setWrapperTranslate(-nowTlanslate)
    //   }
    //   $("#topNav  .active").removeClass('active')
    //   $("#topNav .swiper-slide").eq(swiper.clickedIndex).addClass('active')
    // })
  }

}
