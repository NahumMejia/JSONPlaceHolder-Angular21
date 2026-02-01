import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar implements OnInit {
  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Posts',
        icon: 'pi pi-pen-to-square',
      },
      {
        label: 'Albums',
        icon: 'pi pi-image',
      },
      {
        label: 'Users',
        icon: 'pi pi-users',
      },
    ];
  }
}
