import { Component, Input, Output, EventEmitter} from '@angular/core';
import { SwapiChar } from '../../swapi-char';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input()
  swapiChar: SwapiChar;

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
