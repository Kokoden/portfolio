import { Component, HostListener, OnInit } from '@angular/core';
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

  mobile: boolean = window.innerWidth <= 540;
  activePage: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.activePage = event.urlAfterRedirects.split('/')[1];
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.mobile = window.innerWidth <= 540;
  }

  openMobileMenu() {
    
  }

}
