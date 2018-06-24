import { Component, Output, EventEmitter } from '@angular/core';
import { SwapiChar } from '../swapi-char';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title = 'Star Wars Names';

  newSwapiChar: SwapiChar = new SwapiChar();

  @Output()
  add: EventEmitter<SwapiChar> = new EventEmitter();

  constructor() {
  }

  addSwapiChar() {
    this.add.emit(this.newSwapiChar);
    this.newSwapiChar = new SwapiChar();
  }
}
