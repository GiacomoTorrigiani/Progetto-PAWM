import { Component, OnInit } from '@angular/core';
import { Blog } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { User } from '../_models';
import { AccountService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogsDetail: Blog[] = [];
  user: User;
  constructor(
    public service: ServiceblogService,
    public router: Router,
    public http: HttpClient,
    private accountService: AccountService
  ) {
    this.accountService.user.subscribe(x => this.user = x);
    this.service.showEdit = false;
  }

  ngOnInit(): void {
      this.service.getBlog().subscribe((d: any) => (this.service.Blogs = d));

  }
  



  viewDetail(id: number) {
    this.service.detailId = id;

    if (this.service.loginStatusService) this.service.showEdit = true;

    this.router.navigate(['/blogDetail', id]);
  }
  viewDetails(ids: number) {
    this.service.detailId = ids;

    if (this.service.loginStatusService) this.service.showEdit = true;

    this.router.navigate(['/blogDetails', ids]);
  }
}
