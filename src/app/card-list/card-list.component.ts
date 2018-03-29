import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() cards: Array<any>;
  constructor() { }

  getElementPosition(item) {
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].number == item)
        return i
    }
    return null
  }
  deleteCard(item: number) {
    let pos = this.getElementPosition(item)
    if (pos) this.cards.splice(pos, 1)
    else console.log("Element not found")
  }

  ngOnInit() {
  }

}
