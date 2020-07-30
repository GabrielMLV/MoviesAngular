import { Component, OnInit } from '@angular/core';
import { ApimovieService } from './apimovie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movies-gm';

  constructor(private apimovieService: ApimovieService, private router: Router) { }

  ngOnInit() {
    //this.callTrendDay(this.numbpage);
    this.router.navigate(['/trends']);
  }




}
