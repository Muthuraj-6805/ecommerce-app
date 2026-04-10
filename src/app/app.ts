import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  products = [
  {
    name: 'Wireless Headphones',
    price: 99,
    image: 'headphones.jpg'
  },
  {
    name: 'Smart Watch',
    price: 149,
    image: 'watch.jpg'
  },
  {
    name: 'Gaming Mouse',
    price: 59,
    image: 'mouse.jpg'
  }
  ];

}