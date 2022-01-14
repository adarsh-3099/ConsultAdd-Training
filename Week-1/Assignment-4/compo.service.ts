import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompoService {

  ninjas = [{name: "Naruto", power: "Rasengan"},
  {name: "Sasuke", power: "Chidori"}]

  constructor(private http: HttpClient) { 
    
  }

  getPosts(): Observable<Object[]>{
    return this.http.get<Object[]>(`https://jsonplaceholder.typicode.com/posts`)
  }

  getDetails(): Observable<Object[]>{
    return this.http.get<Object[]>("data.json");
  }

  getNinjas(){
    return this.ninjas
  }
}
