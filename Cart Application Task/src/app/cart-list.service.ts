import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class CartListService {

  constructor(private http: HttpClient) { }

  getList():Observable<any>{
    return this.http.get(environment.cartUrl)
    .pipe(
      map(result => result),
     //catchError(this.handleError)
    );
   }


}
