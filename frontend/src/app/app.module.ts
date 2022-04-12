import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertComponent } from './_components';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { AddroomComponent } from './addroom/addroom.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './ricetteprivate/about.component';
import { BlogDetailComponent } from './home/blog-detail/blog-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutDetailComponent } from './ricetteprivate/about-detail/about-detail.component';
/*import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';*/
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomlistComponent,
    AddroomComponent,
    ChatroomComponent,
    HomeComponent,
    AboutComponent,
    BlogDetailComponent,
    AboutDetailComponent,
    AlertComponent,

    /*LoginButtonComponent,
    LogoutButtonComponent,*/

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatSnackBarModule,
    MatSidenavModule,
    HttpClientModule,
   /* AuthModule.forRoot({
      ...env.auth,
    }),*/
  ],
  providers: [DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
