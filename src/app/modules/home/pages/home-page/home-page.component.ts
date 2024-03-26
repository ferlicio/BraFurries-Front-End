import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

  constructor() {}

  linkRedes = {
    facebook: 'https://www.facebook.com/groups/brafurries/',
    discord: 'https://discord.gg/brafurries',
    telegram: 'https://t.me/brafurros',
  }


  ngOnInit() {
    console.log('Home Page');
  }

}
