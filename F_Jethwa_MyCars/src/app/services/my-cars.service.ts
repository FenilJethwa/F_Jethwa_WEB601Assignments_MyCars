import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';   
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MyCarsService {

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private http: HttpClient, private MessageService: MessageService) { }

  getCars(): Observable<Content[]> {
    
    this.MessageService.add("Content array loaded!");
    return this.http.get<Content[]>("/api/cars");
  }

  addCar(newCar: Content): Observable<Content> {
    this.MessageService.add(`New Car added`);
    return this.http.post<Content>("/api/cars", newCar, this.httpOptions);
  }

  getCarById(id: number): Observable<any> {
    const car = contents.find(content => content.id === id);
    if (car) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(car);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }
}
