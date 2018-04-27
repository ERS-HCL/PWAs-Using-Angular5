import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { GetdataService } from './getdata.service';
import { HttpClientModule }    from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { MoviedetailComponent, DialogOverviewExampleDialog } from './moviedetail/moviedetail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviedetailComponent,
    HomeComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    AppRoutingModule
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
