import { Component, OnInit } from '@angular/core';
import { ApimovieService } from '../apimovie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-list',
  templateUrl: './trending-list.component.html',
  styleUrls: ['./trending-list.component.css']
})
export class TrendingListComponent implements OnInit {
  public numbpage = 1;
  public trends;
  constructor(private apimovieService: ApimovieService, private router: Router) { }

  ngOnInit(): void {
    this.callTrendDay(this.numbpage);
  }

  callTrendDay(numbpage: number) {
    this.apimovieService.getTrendingDay(numbpage).subscribe((data: Array<Object>) => {
      console.log(data);
      this.trends = data;
    });
  }

}
