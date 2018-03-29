import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cards: Array<any> = [
    { text: 'Card 1', number: 1 },
    { text: 'Card 2', number: 2 },
    { text: 'Card 3', number: 3 },
    { text: 'Card 4', number: 4 },
    { text: 'Card 5', number: 5 },
    { text: 'Card 6', number: 6 },
    { text: 'Card 7', number: 7 },
    { text: 'Card 8', number: 8 },
    { text: 'Card 9', number: 9 },
    { text: 'Card 10', number: 10 },
  ];

}
