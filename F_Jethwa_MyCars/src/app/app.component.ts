import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MessageService } from './services/message.service';
import { MyCarsService } from './services/my-cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'F_Jethwa_MyCars';
  carId: number = 8;
  oneCarById: any = {};

  constructor(private SuperBikeService: MyCarsService) { }

  ngOnInit() {
    this.findCarById();
  }

  findCarById() {
    this.SuperBikeService.getCarById(this.carId).subscribe(result => {
      if (typeof result === "object") {
        this.oneCarById = result;
      }
    });
  }
}
