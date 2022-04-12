import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { User } from './_models';
import { AccountService } from './_services';

const config = {
  apiKey: 'AIzaSyDmAjhKeD595lc3TVe0-1V3zCfBZLwP5iw',
  databaseURL: 'https://angularchat-4e96f-default-rtdb.europe-west1.firebasedatabase.app'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';
  user: User;
  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
    firebase.initializeApp(config);
  }
  logout() {
    this.accountService.logout();
}
}
