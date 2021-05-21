import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontloginpage',
  templateUrl: './frontloginpage.component.html',
  styleUrls: ['./frontloginpage.component.css']
})
export class FrontloginpageComponent implements OnInit {
  title: string ="Welcome To The Land of Schlarb";

  constructor() { }

  ngOnInit(): void {
  }

}
