import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';
@Injectable({
  providedIn: 'root'
})
export class MyCarsService {

  constructor() { }
  getCars(): Observable<Content[]> {
    const cars = contents;
    return of(cars);
  }
  getCarById(id: number): Observable<any> {
    const car = contents.find(content => content.id === id);
    return of(car);
  }
}
