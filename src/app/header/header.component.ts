import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() cards: Array<any>;


  months = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];
  isavailable = false;


  constructor() {

  }

  ngOnInit() {
    console.log(this.cards);
  }

}
