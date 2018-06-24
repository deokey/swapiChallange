import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SwapiChar } from '../swapi-char';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  swapiChars: SwapiChar[];

  @Output()
  remove: EventEmitter<SwapiChar> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<SwapiChar> = new EventEmitter();

  constructor() {
  }

  onToggleSwapiCharComplete(swapiChar: SwapiChar) {
    this.toggleComplete.emit(swapiChar);
  }

  onRemoveSwapiChar(swapiChar: SwapiChar) {
    this.remove.emit(swapiChar);
  }
}
