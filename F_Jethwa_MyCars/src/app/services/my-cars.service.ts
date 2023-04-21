import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MyCarsService {

 constructor(private MessageService: MessageService) { }
  getCars(): Observable<Content[]> {
    const cars = contents;
    this.MessageService.add("Content array loaded!");
    return of(cars);
  }
  getCarById(id: number): Observable<any> {
    const car = contents.find(content => content.id === id);
    this.MessageService.add(`Content Item at id: ${id}`);
    return of(car);
  }
}
