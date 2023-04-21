import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
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
    this.MyCarsService.getCarById(this.carId).subscribe(content => this.oneCarById = content);
  }
}
