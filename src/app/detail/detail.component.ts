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

  constructor(private apimovieService: ApimovieService,private _Activatedroute:ActivatedRoute, private router: Router) { }
  /* Using Subscribe */
  sub;
  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
       console.log(params);
       this.id = params.get('id'); 
       this.apimovieService.getDetails(this.id).subscribe((data: Array<Object>) => {
        console.log(data);
        this.details = data;
      });
       //this.detail=details.find(p => p.id==this.id);   
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToLink(url: string){
    window.open(url, "_blank");
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
