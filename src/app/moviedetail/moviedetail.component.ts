import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";
import { GetdataService } from '../getdata.service';


interface APIresponse {
    backdrop_path: string;
    videos: {
    results: [
      {
        key: string,
        name: string      
      }
    ] 
  };
}

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})

export class MoviedetailComponent implements OnInit {
  data;
  imagePath;
  videoURL: SafeUrl;
  loader: boolean = true;
  errormsg: string = null;

  constructor(private getdataservice: GetdataService,
              private route: ActivatedRoute,
              private sanitizer : DomSanitizer,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getFullDetails();
  }

  getFullDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getdataservice.getFullData(id)
      .subscribe((res: APIresponse) => {
                this.loader = false;
                this.errormsg = null;
                console.log(res);
                if(res){
                  this.data = res;
                  if(res.backdrop_path) {
                    this.imagePath = 'https://image.tmdb.org/t/p/original' + res.backdrop_path;
                  }
                  if(res.videos.results[0].key) {
                    let url = 'https://www.youtube.com/embed/' + res.videos.results[0].key;
                    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
                  }
                }              
              },
          err => {
            this.loader = false;
            console.log(err);
            this.errormsg = err.error.status_message;
          }
      );
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { video: this.videoURL }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}




