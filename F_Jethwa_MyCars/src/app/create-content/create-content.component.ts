import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
  
export class CreateContentComponent {


  newCar: any = {};
  errMsg: string = '';
@Output() addCarEvent = new EventEmitter<Content>();

addNewCar(){
    const addCar = new Promise((resolve, reject) => {
      if (!this.newCar.title) {
        reject('Title is required');
      } else if (!this.newCar.description) {
        reject('Description is required');
      } else if (!this.newCar.creator) {
        reject('Creator is required');
      } else {
        this.addCarEvent.emit(this.newCar);
        this.newCar = {};
        resolve(this.newCar.title);
      }
    });

    addCar.then(title => {
      this.errMsg = '';
      console.log(`New Car Added Successfull, Title: ${title}`);
    }).catch(err => {
      this.errMsg = err;
    });
  }
}
