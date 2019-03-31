import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule,MatIconModule,MatTableModule} from '@angular/material';
import {  HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ApiService } from './common-classes/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
