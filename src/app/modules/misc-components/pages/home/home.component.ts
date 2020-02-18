import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: number[] = [...Array(25).keys()];
  images: CarouselImage[] = [
    { url: 'http://placekitten.com/100/100' },
    { url: 'http://placekitten.com/100/125' },
    { url: 'http://placekitten.com/100/100' },
    { url: 'http://placekitten.com/125/100' },
    { url: 'http://placekitten.com/115/115' },
    { url: 'http://placekitten.com/50/150' },
    { url: 'http://placekitten.com/50/50' },
    { url: 'http://placekitten.com/100/100' },
    { url: 'http://placekitten.com/100/135' },
    { url: 'http://placekitten.com/100/100' },
    { url: 'http://placekitten.com/100/100' },
    { url: 'http://placekitten.com/100/125' },
    { url: 'http://placekitten.com/100/100' },
    { url: 'http://placekitten.com/125/100' },
    { url: 'http://placekitten.com/115/115' },
    { url: 'http://placekitten.com/50/150' },
    { url: 'http://placekitten.com/50/50' },
    { url: 'http://placekitten.com/100/100' },
    { url: 'http://placekitten.com/100/135' },
    { url: 'http://placekitten.com/100/100' }
  ];

  constructor() {}

  ngOnInit() {}
}

interface CarouselImage {
  url: string;
}
