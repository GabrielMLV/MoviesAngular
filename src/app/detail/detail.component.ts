import { Component, OnInit } from '@angular/core';
import { ApimovieService } from '../apimovie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  public details;
  private id;
  private type;
  public similar;
  public detailNamePage = "Detalhes";
  public numbpage = 1;
  constructor(private apimovieService: ApimovieService, private _Activatedroute: ActivatedRoute, private router: Router) { }
  /* Using Subscribe */
  sub;
  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      this.type = params.get('type');
      console.log(this.type);
      if (this.type == 'movie') {
        this.callSimilarMovies(this.id);
        this.apimovieService.getDetailsMovie(this.id).subscribe((data: Array<Object>) => {
          console.log(data);
          this.details = data;
        });
      } else if (this.type == 'tv') {
        this.callSimilarTv(this.id);
        this.apimovieService.getDetailsTv(this.id).subscribe((data: Array<Object>) => {
          console.log(data);
          this.details = data;
        });
      } else {

      }

      //this.detail=details.find(p => p.id==this.id);   
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  callSimilarMovies(idSimilar) {
    this.apimovieService.getSimilarMovie(idSimilar, this.numbpage).subscribe((data: Array<Object>) => {
      console.log(data);
      this.similar = data;
    });
  }

  callSimilarTv(idSimilar) {
    this.apimovieService.getSimilarTv(idSimilar, this.numbpage).subscribe((data: Array<Object>) => {
      console.log(data);
      this.similar = data;
    });
  }

  timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hora(s) e " + rminutes + " minuto(s).";
  }

}
