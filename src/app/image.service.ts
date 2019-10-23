import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  pixabayUrl: string = 'https://pixabay.com/api/';
  imageType: string = 'photo';
  perPage: string = '40';

  constructor(private _http: HttpClient) { }

  getImages(query): Observable<any[]> {
    return this._http.get<any[]>(`${this.pixabayUrl}?key=${API_KEY}&q=${query}&image_type=${this.imageType}&per_page=${this.perPage}`);
  }

}
