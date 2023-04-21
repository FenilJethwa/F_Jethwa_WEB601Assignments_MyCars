import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultBike: string = '/assets/images/Car.jpg'

  constructor() {
    this.contents = [
      

  handleClick(content: Content) {
    console.log(`ID: ${content.id}, Title: ${content.title}`);
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
  addNewCar(newCar: Content) {
    this.contents.push(newCar);
    this.contents = [...this.contents];
  }
}
