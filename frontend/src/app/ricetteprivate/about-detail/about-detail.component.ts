import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from '../blog-type';


@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.css']
})
export class AboutDetailComponent implements OnInit {

  id: any;
 
  aboutDetail: About | null = null;
 

  
  constructor(activatedRouter: ActivatedRoute, public service: ServiceblogService, public router: Router) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.aboutDetail = this.service.About.filter(x => x.id === +this.id)[0];


  }
  

 

}
