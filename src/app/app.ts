import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loader } from './Modules/Core/Components/loader/loader';
import { NavBar } from "./Modules/Core/Components/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
