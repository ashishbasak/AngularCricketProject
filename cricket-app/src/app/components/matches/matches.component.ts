import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/common-classes/api.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  dataSource:any;
  displayedColumns: string[];
  heartButtonClicked;
  heartButtonCss:{};

  meth(){
    
  this.heartButtonCss={
    "buttonClicked":this.heartButtonClicked,
    "buttonNotClicked":!this.heartButtonClicked
  }
  return this.heartButtonCss;
}

  constructor(private apiService:ApiService) { 

    this.heartButtonClicked=false
    this.displayedColumns = ['dateTime', 'team-1','team-2','type','toss_winner_team','winner_team','matchStarted','addToFav'];

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;   

  ngOnInit() {
    //subscribe me data aaya and then i used data inside a function which is called inside subscribe
    this.apiService.getAllMatches().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data.matches);
        console.log(this.dataSource)
        this.dataSource.paginator = this.paginator;
    })

  }

  addToFavourites(element:any){
    this.heartButtonClicked=true;
    console.log("b clicked",this.heartButtonClicked);
    console.log("element selected is ",element);
  }

}
