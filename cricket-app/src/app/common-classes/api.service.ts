import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiService{

    constructor(private httpClient: HttpClient) { }

    getAllMatches():Observable<any>{

        const url="http://cricapi.com/api/matches?apikey=TQZZk3qkzNZVZsKCAb0URwxRvBy2";

        return this.httpClient.get(url);
    }

}