import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SwapiChar } from './swapi-char';

const API_URL = 'http://localhost:3000';
const API_REAL_SWAPI_URL = 'https://swapi.co/api/people';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  // API: GET /swapiChars
  public getAllSwapiChars(): Observable<SwapiChar[]> {
    // will use this.http.get()
    return this.http
      .get(`${API_URL}/swapiChars`)
      .map(response => {
        const swapiChars: any = response;
        return swapiChars.map((char) => new SwapiChar(char));
      })
      .catch(this.handleError);
  }

  // API: POST /swapiChars
  public createSwapiChar(swapiChar: SwapiChar) {
    // will use this.http.post()
    return this.http
      .post(`${API_URL}/swapiChars`, swapiChar)
      .map(response => {
        return new SwapiChar(response);
      })
      .catch(this.handleError);
  }

  // API: GET /swapiChars/:id
  public getSwapiCharById(swapiCharId: number): Observable<SwapiChar> {
    return this.http
      .get(`${API_URL}/swapiChars/${swapiCharId}`)
      .map(response => {
        return new SwapiChar(response);
      })
      .catch(this.handleError);
  }

  // API: PUT /swapiChars/:id
  public updateSwapiChar(swapiChar: SwapiChar) {
    // will use this.http.put()
    return this.http
      .put(`${API_URL}/swapiChars/${swapiChar.id}`, swapiChar)
      .map(response => {
        return new SwapiChar(response);
      })
      .catch(this.handleError);
  }

  // DELETE /swapiChars/:id
  public deleteSwapiCharById(swapiCharId: number) {
    // will use this.http.delete()
    return this.http
      .delete(`${API_URL}/swapiChars/${swapiCharId}`)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.error('SWAPI-Service::handleError', error);
    return Observable.throwError(error);
  }
}
