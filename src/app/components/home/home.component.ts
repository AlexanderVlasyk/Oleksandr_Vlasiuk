import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title = 'Hello, I am Oleksandr Vlasiuk.<br> I am a front-end web developer.';
  constructor() { }

  ngOnInit() {
  }

}
