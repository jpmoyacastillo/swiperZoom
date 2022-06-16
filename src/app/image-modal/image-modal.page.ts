import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperOptions } from 'swiper';

import SwiperCore, { Zoom } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
// install Swiper modules
SwiperCore.use([Zoom]);

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  @ViewChild('swiper', { static: true }) swiper: SwiperComponent;
  @Input() img: string;
  config: SwiperOptions = {
    zoom: {
      maxRatio: 10,
      minRatio: 0.2,
    },
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  zoom(zoomIn: boolean) {
    const zoom = this.swiper.swiperRef.zoom;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    zoomIn ? zoom.in() : zoom.out();
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
