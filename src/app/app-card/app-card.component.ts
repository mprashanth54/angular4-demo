import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {
  @Input() text: String;
  @Input() number: Number;
  @Output() onCardDelete = new EventEmitter<number>();
  userKey = "";

  constructor() { }

  deleteCard(number: number) {
    this.onCardDelete.emit(number)
  }

  ngOnInit() {
    console.log(this.text, typeof (this.number))
  }

  onClick(event) {
    console.log(event.target.value)
    this.userKey = event.target.value;
  }

}
