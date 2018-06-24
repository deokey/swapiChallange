import { Component, OnInit } from '@angular/core';
import {SwapiChar} from '../swapi-char';
import {SwapiDataService} from '../swapi-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chars',
  templateUrl: './chars.component.html',
  styleUrls: ['./chars.component.scss']
})
export class CharsComponent implements OnInit {

  swapiChars: SwapiChar[] = [];

  constructor (
    private swapiDataService: SwapiDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
      .map((data) => {
        return data['chars'];
      })
      .subscribe(
        (swapiChars) => {
          this.swapiChars = swapiChars;
        }
      );
  }

  onAddSwapiChar(swapiChar) {
    this.swapiDataService
      .addSwapiChar(swapiChar)
      .subscribe(
        (newSwapiChar) => {
          this.swapiChars = this.swapiChars.concat(newSwapiChar);
        }
      );
  }

  onToggleSwapiCharComplete(swapiChar) {
    this.swapiDataService
      .toggleSwapiCharComplete(swapiChar)
      .subscribe(
        (updatedSwapiChar) => {
          swapiChar = updatedSwapiChar;
        }
      );
  }

  onRemoveSwapiChar(swapiChar) {
    this.swapiDataService
      .deleteSwapiCharById(swapiChar.id)
      .subscribe(
        (_) => {
          this.swapiChars = this.swapiChars.filter((x) => x.id !== swapiChar.id);
        }
      );
  }

}
