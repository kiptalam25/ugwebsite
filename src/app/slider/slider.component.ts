import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
nextImageClick() {
this.slider?.next();
}
prevImageClick() {
this.slider?.prev();
}

  constructor() { }

  ngOnInit(): void {
  }
  longText="Jesus Christ The Bible describes heaven, through the word pictures of a beautiful city, a garden paradise, but never in base sensual ways. Rev 22:12-17 Muhammad describes Heaven, as promised in the Quran describes men drinking endless quantities of wine and sex with women to which he is not married (Suras 2:25; 4:57; 11:23; 47:15). We wonder why Muslims will not drink wine or commit adultery on their wives now? Does eternity make these sins right? This view of heaven is"


  @ViewChild('nav') slider: NgImageSliderComponent | undefined;

  
  imgCollection: Array<object> = [
      {
        image: 'assets/1.png',
        thumbImage: 'assets/1.png',
        alt: 'Image 1',
        title: 'Software development'
      }, {
        image: 'https://loremflickr.com/600/400/brazil,rio',
        thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
        title: 'Image 2',
        alt: 'Image 2'
      }, {
        image: 'https://loremflickr.com/600/400/paris,girl/all',
        thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
        title: 'Image 3',
        alt: 'Image 3'
      }, {
        image: 'https://loremflickr.com/600/400/brazil,rio',
        thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
        title: 'Image 4',
        alt: 'Image 4'
      }, {
        image: 'https://loremflickr.com/600/400/paris,girl/all',
        thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
        title: 'Image 5',
        alt: 'Image 5'
      }, {
        image: 'assets/1.png',
        thumbImage: 'assets/1.png',
        title: 'Image 6',
        alt: 'Image 6'
      }
  ];
  
}
