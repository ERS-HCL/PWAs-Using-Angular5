import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'  },
  { path: 'detail/:id', component: MoviedetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}