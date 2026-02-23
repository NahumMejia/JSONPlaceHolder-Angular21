import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { NavBar } from './Modules/Core/Components/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
