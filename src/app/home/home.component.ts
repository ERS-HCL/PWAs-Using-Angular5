import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';


interface APIresponse {
    results: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private getdataservice: GetdataService) { }
  searchedItem:string = '';
  selectedItem:string = 'movie';
  iData = [];
  loader: boolean = false;
  noData: boolean = false;
  errormsg: string = null;

  items = [
    { value: 'movie', viewValue: 'Music & Movies' },
    { value: 'tv', viewValue: 'TV Shows' }
  ];

  SearchItunes(): void {
      this.iData  = [];
      this.loader = true;  
      this.noData = false;
      this.getdataservice.getData(this.searchedItem,this.selectedItem)
            .subscribe((res: APIresponse) => {
                this.errormsg = null;
                this.loader = false;
                if(res.results.length === 0){
                  this.noData = true;
                }                 
                this.iData = res.results;
                console.log("movie   ",this.iData);
              },
              err => {
                this.loader = false;
                console.log(err);
                this.errormsg = err.error.errors[0];
              }
            );
  } 
}
