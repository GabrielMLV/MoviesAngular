import { Component, OnInit } from '@angular/core';
import { ApimovieService } from '../apimovie.service';
import { Router } from '@angular/router';
declare var UIkit: any;
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  //public nameMovie: string;
  public movies;
  public upcomings;
  public numbpage = 1;
  searchMovie: string;
  constructor(private apimovieService: ApimovieService, private router: Router) { }

  ngOnInit() {
    this.callMovie(this.numbpage);
    this.callUpcoming();
  }

  callMovie(numbpage) {
    this.apimovieService.getMovies(numbpage).subscribe((data: Array<Object>) => {
      console.log(data);
      this.movies = data;
    });
  }

  callUpcoming() {
    this.apimovieService.getMoviesUpcoming().subscribe((data: Array<Object>) => {
      console.log(data);
      this.upcomings = data;
    }
    );
  }

  callMovieSearch(search, numbpage) {
    this.apimovieService.getMoviesSearch(search, numbpage).subscribe((data: Array<Object>) => {
      console.log(data);
      this.movies = data;
    }
    );
  }

  goToMovie() {
    //this.router.navigate(['/movie']);
    this.callMovieSearch(this.searchMovie, this.numbpage);
  }

  goToNextMovie() {
    this.numbpage += 1;
    console.log(this.searchMovie);
    if (typeof this.searchMovie == "undefined" || this.searchMovie == "" || this.searchMovie == null || this.searchMovie.trim().length == 0) {
      this.callMovie(this.numbpage);
    } else {
      this.callMovieSearch(this.searchMovie, this.numbpage);
    }

  }

  goToPrevMovie() {
    this.numbpage -= 1;
    if (typeof this.searchMovie == "undefined" || this.searchMovie == "" || this.searchMovie == null || this.searchMovie.trim().length == 0) {
      this.callMovie(this.numbpage);
    } else {
      this.callMovieSearch(this.searchMovie, this.numbpage);
    }
  }


}
