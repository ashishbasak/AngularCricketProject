import { Injectable } from "@angular/core";
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable()
export class ApiService{

    constructor(private httpClient: HttpClient) { }

    getAllMatches():Observable<any>{

        const url="http://cricapi.com/api/matches?apikey=TQZZk3qkzNZVZsKCAb0URwxRvBy2";

        return this.httpClient.get(url);
    }

    checkLogin():Observable<any>{

        const url="http://localhost:3000/users";

        return this.httpClient.get(url);
    }

  addUser(postedData): Observable<any> {
    const url="http://localhost:3000/users";

    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        })
      };

    return this.httpClient.post(url, postedData, httpOptions);
  

}
    saveFavourites(user,favmatches):Observable<any>{
        const url="http://localhost:3000/users/"+user;
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        var data={
            "id": "ashish",
            "password": "ashish",
            "favmatches": favmatches
          }
console.log("post Request: ",favmatches);

        // return this.http.put(url,{
        //     body: JSON.stringify(data), // data can be `string` or {object}!
        //     headers:{
        //       'Content-Type': 'application/json'
        //     }
        //   });

          return this.httpClient.put(url, JSON.stringify(data),httpOptions);


    //       return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
    // .pipe(
    //   catchError(this.handleError('updateHero', hero))
    // );
    }

    getUserDetails(name):Observable<any>{

        const url="http://localhost:3000/users/"+ name;

        return this.httpClient.get(url);
    }

}