import { Component, OnInit } from '@angular/core';
import { About } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  blogsDetail: About[] = [];

  constructor(
    public service: ServiceblogService,
    public router: Router,
    public http: HttpClient
  ) {
    this.service.showEdit = false;
  }

  ngOnInit(): void {
      this.service.getBlog().subscribe((d: any) => (this.service.About = d));

  }
  



  viewDetail(id: number) {
    this.service.detailId = id;

    if (this.service.loginStatusService) this.service.showEdit = true;
   

    
    this.router.navigate(['/aboutDetail', id]);
   
  }
  
}
