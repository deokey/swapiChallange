import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SwapiChar } from './swapi-char';
import { SwapiDataService } from './swapi-data.service';

@Injectable()
export class CharsResolver implements Resolve< Observable<SwapiChar[]> > {

  constructor(
    private swapiDataService: SwapiDataService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<SwapiChar[]> {
    return this.swapiDataService.getAllSwapiChars();
  }
}
