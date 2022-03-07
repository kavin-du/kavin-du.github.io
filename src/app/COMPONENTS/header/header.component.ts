import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  buttons: any[] = [
    {
      name: 'Home',
      icon: 'assets/header-items/home.png',
      route: '',
    },
    {
      name: 'Projects',
      icon: 'assets/header-items/projects.png',
      route: '/projects',
    },
    {
      name: 'Contact Me',
      icon: 'assets/header-items/contact-me.png',
      route: '/contact',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
