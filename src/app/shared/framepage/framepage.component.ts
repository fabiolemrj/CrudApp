import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-framepage',
  template: '<app-navbar></app-navbar><router-outlet></router-outlet>'
})
export class FramepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
