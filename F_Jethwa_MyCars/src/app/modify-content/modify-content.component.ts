import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newCar: any = {};
  @Output() addCarEvent = new EventEmitter<Content>();

  addNewCar() {
    this.addCarEvent.emit(this.newCar);
    this.newCar = {};
  }

}
