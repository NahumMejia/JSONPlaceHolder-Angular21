import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar implements OnInit {
  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '',
      },
      {
        label: 'Posts',
        icon: 'pi pi-pen-to-square',
        routerLink: '/posts',
      },
      {
        label: 'Albums',
        icon: 'pi pi-image',
        routerLink: '/albums',
      },
      {
        label: 'Users',
        icon: 'pi pi-users',
        routerLink: '/users',
      },
    ];
  }
}
