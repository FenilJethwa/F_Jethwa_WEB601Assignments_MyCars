import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentTypePipe } from './pipes/content-type.pipe';
import { HoverAffectDirective } from './directives/hover-affect.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { MessageComponent } from './message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentTypePipe,
    HoverAffectDirective,
    CreateContentComponent,
    MessageComponent,
    ModifyContentComponent,
    AddContentDialogComponent,
    ContentDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
