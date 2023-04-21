import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MyCarsService } from '../services/my-cars.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[] = [];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultImage: string = '/assets/images/Car.jpg'

  constructor(private MyCarsService: MyCarsService) {

  }

  ngOnInit() {
    this.MyCarsService.getCars().subscribe(cars => this.contents = cars);

  }
  addNewCar(newCar: Content) {
    this.MyCarsService.addCar(newCar).subscribe(newCarFromServer => {
      this.contents.push(newCarFromServer);
      this.contents = [...this.contents];
    });
  }

  searchByTitle() {
    const matchingCar = this.contents.find(car => car.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`div.card`);

    if (matchingCar) {
      this.titleFound = true;

      cardElements.forEach(card => {
        if (parseInt(card.id) === matchingCar.id) {
          card.classList.add('matched');
        } else {
          card.classList.remove('matched');
        }
      });
    } else {
      this.titleFound = false;
      cardElements.forEach(card => card.classList.remove('matched'));
    }
  }
}
