import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
  
export class CreateContentComponent {


newCar: any = {};
@Output() addCarEvent = new EventEmitter<Content>();

addNewCar(){
  this.addCarEvent.emit(this.newCar);
  this.newCar = {};
}
}
