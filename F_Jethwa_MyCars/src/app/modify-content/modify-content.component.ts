import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newCar: any = {};
  @Output() addCarEvent = new EventEmitter<Content>();


  constructor(public dialog: MatDialog, private MessageService: MessageService) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddContentDialogComponent, {
      width: '50%'
    });
    dialogRef.afterClosed().subscribe(newCarFromDialog => {
      if (newCarFromDialog) {
        if (newCarFromDialog.title && newCarFromDialog.description && newCarFromDialog.creator) {
          this.newCar = newCarFromDialog;
          this.addNewCar();
        } else {
          this.MessageService.add('No content added. Required fields are empty');
        }
      }
    });
  }

  addNewCar() {
    this.addCarEvent.emit(this.newCar);
    this.newCar = {};
  }

}
