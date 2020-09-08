import { Component, OnInit } from '@angular/core';
import { ApimovieService } from '../apimovie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {
  public resultSearch;
  public search;
  public detailNamePage = "Pesquisa: ";
  public numbpage = 1;
  constructor(private apimovieService: ApimovieService, private _Activatedroute: ActivatedRoute, private router: Router) { }
  sub;
  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);    
      this.search = params.get('pesquisa');
      this.detailNamePage = this.search;
        this.callMovieSearch(this.search, this.numbpage);
      //this.detail=details.find(p => p.id==this.id);   
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  callMovieSearch(search, numbpage) {
    this.apimovieService.getMultiSearch(search, numbpage).subscribe((data: Array<Object>) => {
      console.log(data);
      this.resultSearch = data;
    }
    );
  }

  goMovieSearch() {
    //this.router.navigate(['/movie']);
    //console.log(this.searchMovieTrend);
    this.callMovieSearch(this.search, this.numbpage);
  }

}
