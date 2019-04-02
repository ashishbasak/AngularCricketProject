import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/common-classes/api.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';

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
  favourites: any[];

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
    });

    this.apiService.getUserDetails("ashish").subscribe(data=>{
      this.favourites=data.favmatches;  
      console.log("old",this.favourites) ;
    });


  }

  addToFavourites(element:any){
    this.heartButtonClicked=true;
    console.log("b clicked",this.heartButtonClicked);
    console.log("element selected is ",element.unique_id);
     
    this.favourites.push({
      "unique_id": element.unique_id,
      "date": element.date,
      "team-1": element['team-1'],
      "team-2": element['team-2'],
      "type": element.type,
      "toss_winner_team": element.toss_winner_team,
      "winner_team": element.winner_team,
      "matchStarted": element.matchStarted
    }); 
    
    console.log("new",this.favourites) ;

  

this.apiService.saveFavourites("ashish",this.favourites).subscribe(data=>{
      console.log("pushed new data: ",data);
    });

    
  }

}
