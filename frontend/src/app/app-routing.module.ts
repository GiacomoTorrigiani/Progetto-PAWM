import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { AddroomComponent } from './addroom/addroom.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './ricetteprivate/about.component';
import { AboutDetailComponent } from './ricetteprivate/about-detail/about-detail.component';
import { BlogDetailComponent } from 'src/app/home/blog-detail/blog-detail.component';
import { AuthGuard } from './_helpers';
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'roomlist', component: RoomlistComponent, canActivate: [AuthGuard] },
  { path: 'addroom', component: AddroomComponent, canActivate: [AuthGuard] },
  { path: 'chatroom/:roomname', component: ChatroomComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  {path: 'ricetteprivate', component:AboutComponent},
  {path: 'blogDetail/:id', component: BlogDetailComponent },
  {path: 'aboutDetail/:id', canActivate: [AuthGuard] ,component: AboutDetailComponent },
  { path: 'account', loadChildren: accountModule },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
