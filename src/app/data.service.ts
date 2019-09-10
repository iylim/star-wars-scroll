import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './film.model';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://swapi.co/api/films';

  constructor(private _http: HttpClient) { }

  getFilm() {
    return this._http.get<Film[]>(this.apiUrl);
  }
}
