import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  message: string = '';

  constructor() {}

  greet() {
    this.message = 'Hello World! How is your day?';
  }
}
