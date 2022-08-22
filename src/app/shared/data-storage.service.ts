import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Movie } from '../movie/movie.model';
import { MovieService } from '../movie/movie.service';
import { Resolve } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private movieService: MovieService) {}

  baseUrl = 'https://api.themoviedb.org/3/';
  apiKey = '86fa93712b855783e180794c3ce83f5e';
  
  public movies: Movie[] = [];
  storeMovies() {
    const movies = this.movieService.getMovies();
    this.http
      .put(
        'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
        movies
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchMovies() {
    this.http
    .get<{page:number,results:Movie[]}>(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`)
    .pipe(  
      map(response => {
        for(let item of response.results){
          this.movies.push(item);
        }
        console.log(this.movies);
        this.movieService.setMovies(this.movies);
        return this.movies;
      })
    ).subscribe(response => {});

      //https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
    this.http
    .get<{genres:any[]}>(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=en-US`)
    .pipe(  
      map(response => {
        console.log(response.genres);
        this.movieService.setgenres(response.genres);
      })
    ).subscribe(response => {});

    return this.movies;
  }
  
  getMovies(){
    if (this.movies.length === 0) {
      return this.fetchMovies();
    } else {
      return this.movies;
    }
  }
}
