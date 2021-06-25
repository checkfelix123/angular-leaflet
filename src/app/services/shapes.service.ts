import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShapesService {
  constructor(private http: HttpClient) {
  }

  getShape(): Observable<any> {
    return this.http.get<any>('/assets/gz_2010_us_outline_500k.json');
  }
}
