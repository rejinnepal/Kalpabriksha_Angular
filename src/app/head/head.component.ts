import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  socialMedia: {name: string; link: string; icon: string}[] = [
    {name: 'facebook', link: 'https://www.facebook.com/kalpabriksha.np', icon: 'bi bi-facebook'}, 
    {name: 'instagram', link: 'https://www.instagram.com/kalpabriksha.np/', icon: 'bi bi-instagram'}]


}
