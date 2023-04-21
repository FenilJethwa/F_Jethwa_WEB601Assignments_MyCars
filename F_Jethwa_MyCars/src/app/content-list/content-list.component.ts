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
      {
        id: 1,
        title: 'My First Content',
        description: 'This is the description for my first content item',
        creator: 'Me',
        imgURL: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80',
        type: 'Super',
        tags: ['Tag 1', 'Tag 2']
      },
      {
        id: 2,
        title: 'My Second Content',
        description: 'This is the description for my second content item',
        creator: 'F Jethwa',
        imgURL: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'Hyper',
        tags: ['Tag 3', 'Tag 4']
      },
      {
        id: 3,
        title: 'My Third Content',
        description: 'This is the description for my third content item',
        creator: 'R Chalthanwala',
        imgURL: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'Sport',
        tags: ['Tag 5', 'Tag 6']
      },
      {
        id: 4,
        title: 'My Fourth Content',
        description: 'This is the description for my fourth content item',
        creator: 'Rajvir',
        imgURL: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=800',
        type: 'Super',
        tags: ['Tag 1.1', 'Tag 1.2']
      },
      {
        id: 5,
        title: 'Car5',
        description: 'This is the description for my fifth content item',
        creator: 'Nishi K',
        imgURL: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'Sport',
        tags: ['Tag 1.1', 'Tag 4.5']
      },
      {
        id: 6,
        title: 'Car6',
        description: 'This is the description for my sixth content item ',
        creator: 'Justin DCruz',
        imgURL: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        type: 'Hyper',
        tags: ['Tag 1.9', 'Tag 12']
      },
      {
        id: 7,
        title: 'Car7',
        description: 'This is the description for my seventh content item',
        creator: 'Joe Russo',
        imgURL: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'Clasic',
        tags: ['Tag 3.1', 'Tag 1.2']
      },
      {
        id: 8,
        title: 'Car8',
        description: 'This is the description for my eigth content item',
        creator: 'Dinesh Katudia',
        imgURL: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        type: '',
        tags: ['Tag 2.1', 'Tag 1.2']
      },
    ]
  }

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
