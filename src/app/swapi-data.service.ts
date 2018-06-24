import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { SwapiChar } from './swapi-char';

@Injectable({
  providedIn: 'root'
})
export class SwapiDataService {

  constructor(
    private api: ApiService
  ) {
  }

  addSwapiChar(swapiChar: SwapiChar): Observable<SwapiChar> {
    return this.api.createSwapiChar(swapiChar);
  }

  deleteSwapiCharById(swapiCharId: number): Observable<SwapiChar> {
    return this.api.deleteSwapiCharById(swapiCharId);
  }

  updateSwapiChar(swapiChar: SwapiChar): Observable<SwapiChar> {
    return this.api.updateSwapiChar(swapiChar);
  }

  getAllSwapiChars(): Observable<SwapiChar[]> {
    return this.api.getAllSwapiChars();
  }

  getSwapiChaById(swapiCharId: number): Observable<SwapiChar> {
    return this.api.getSwapiCharById(swapiCharId);
  }

  toggleSwapiCharComplete(swapiChar: SwapiChar) {
    swapiChar.complete = !swapiChar.complete;
    return this.api.updateSwapiChar(swapiChar);
  }
}
