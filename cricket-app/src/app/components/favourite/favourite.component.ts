import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/common-classes/api.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  dataSource:any;
  displayedColumns: string[];
  heartButtonClicked;
  favourites: any[];

  constructor(private apiService:ApiService) { 

    this.heartButtonClicked=false
    this.displayedColumns = ['dateTime', 'team-1','team-2','type','toss_winner_team','winner_team','matchStarted'];
    
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;   

  ngOnInit() {
    
    this.apiService.getUserDetails("ashish").subscribe(data=>{
      this.dataSource = new MatTableDataSource(data.favmatches);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;

  });
  }
}
