import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { about } from './blog-data';

@Injectable({
  providedIn: 'root'
})
export class ServiceblogService {

  About: any[] = [];

  loginStatusService = false;

  detailId: number = -1;
  showEdit = false;



  constructor(public http: HttpClient) {
  }

  public getBlog(): Observable<any> {
    return of(about);
  }

 


}
