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


  constructor(private SuperBikeService: MyCarsService) { }

  ngOnInit() {

  }
}
