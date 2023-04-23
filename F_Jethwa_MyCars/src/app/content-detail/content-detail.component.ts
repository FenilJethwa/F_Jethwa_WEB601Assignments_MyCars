import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ActivatedRoute } from '@angular/router';
import { MyCarsService } from '../services/my-cars.service';
@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
  content: any = {};  
  defaultCar: string = '/assets/images/Car.jpg';

  constructor(private route: ActivatedRoute, private MyCarsService: MyCarsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);

      this.MyCarsService.getCarById(this.id).subscribe(car => {
        this.content = car;
      })
    });
  }

  handleClick(content: Content) {
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }




}
