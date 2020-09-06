import { Component, OnInit } from '@angular/core';
import { ApimovieService } from '../apimovie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public numbpage = 1;
  public trendsHome;
  public popularHome;
  public tvLatest;
  public searchMovieTrend;
  public imgDefault = "../../assets/notImg.png";

  constructor(private apimovieService: ApimovieService, private router: Router) { }

  ngOnInit(): void {
    this.callTrendDay(this.numbpage);
    this.callMoviePopular(this.numbpage);
    this.calTvLatest(this.numbpage);
  }

  callTrendDay(numbpage: number) {
    this.apimovieService.getTrendingDay(numbpage).subscribe((data: Array<Object>) => {
      console.log(data);
      this.trendsHome = data;
    });
  }

  callMoviePopular(numbpage: number) {
    this.apimovieService.getMovies(numbpage).subscribe((data: Array<Object>) => {
      console.log(data);
      this.popularHome = data;
    });
  }

  calTvLatest(numbpage: number) {
    this.apimovieService.getTv(numbpage).subscribe((data: Array<Object>) => {
      console.log(data);
      this.tvLatest = data;
    });
  }
  

  callMovieSearch(search, numbpage) {
    this.apimovieService.getMultiSearch(search, numbpage).subscribe((data: Array<Object>) => {
      console.log(data);
      this.trendsHome = data;
    }
    );
  }

  goMovieSearch() {
    //this.router.navigate(['/movie']);
    //console.log(this.searchMovieTrend);
    this.callMovieSearch(this.searchMovieTrend, this.numbpage);
  }

}
