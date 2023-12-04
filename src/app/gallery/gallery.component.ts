import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  photos = [
    { url: 'photo1.jpg', title: 'Photo 1' },
    { url: 'photo2.jpg', title: 'Photo 2' },
    { url: 'photo3.jpg', title: 'Photo 3' },
    // Add more photos as needed
  ];
}
