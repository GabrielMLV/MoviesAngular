import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApimovieService {
  
  URL = 'https://api.themoviedb.org/3';
  key_id = "c17037565d3e126bc17b1c6e738eb4e2";
  constructor(private httpClient: HttpClient) { }

  getMovies(numbpage) {
    return this.httpClient.get('' + this.URL + '/movie/popular?api_key=' + this.key_id + '&language=pt-BR&page=' + numbpage + '').pipe(catchError(this.handleError));
  }

  getMoviesUpcoming() {
    return this.httpClient.get('' + this.URL + '/movie/upcoming?api_key=' + this.key_id + '&language=pt-BR&page=1').pipe(catchError(this.handleError));
  }

  getMoviesSearch(search, numbpage) {
    return this.httpClient.get('' + this.URL + '/search/movie?api_key=' + this.key_id + '&language=pt-BR&query=' + search + '&page=' + numbpage + '&include_adult=false').pipe(catchError(this.handleError));
  }

  getMultiSearch(search, numbpage) {
    return this.httpClient.get('' + this.URL + '/search/multi?api_key=' + this.key_id + '&language=pt-BR&query=' + search + '&page=' + numbpage + '&include_adult=false').pipe(catchError(this.handleError));
  }

  getTrendingDay(numbpage) {
    return this.httpClient.get('' + this.URL + '/trending/all/day?api_key=' + this.key_id + '&language=pt-BR&page=' + numbpage + '&include_adult=false').pipe(catchError(this.handleError));
  }

  getDetails(id) {
    return this.httpClient.get('' + this.URL + '/movie/'+id+'?api_key=' + this.key_id + '&language=pt-BR' + '').pipe(catchError(this.handleError));
  }

  getSimilar(id, numbpage) {
    return this.httpClient.get('' + this.URL + '/movie/'+id+'/similar?api_key=' + this.key_id + '&language=pt-BR&page=' + numbpage +'').pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
