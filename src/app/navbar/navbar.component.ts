import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  navLinks: any[] = [
    { name: 'home', route: '/home' },
    { name: 'playground', route: '/playground' }
  ];

  activePage: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.activePage = event.urlAfterRedirects.split('/')[1];
      }
    });
  }

}
