import { Component, Input } from '@angular/core';
import {SwapiChar} from '../swapi-char';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input()
  swapiChars: SwapiChar[];

  constructor() {
  }

}
