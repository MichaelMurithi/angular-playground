import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { EventsComponent } from './components/events/events/events.component';
import { EventComponent } from './components/event/event.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';

const redirectUnAuthorizedToLogin = () => redirectUnauthorizedTo;

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnAuthorizedToLogin },
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: ' profile', component: ProfileComponent },
  {
    path: 'events/:id',
    component: EventComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnAuthorizedToLogin },
  },
  {
    path: 'edit/:id',
    component: EditEventComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnAuthorizedToLogin },
  },
  {
    path: 'search/:keyword',
    component: SearchComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnAuthorizedToLogin },
  },
  {
    path: 'create',
    component: CreateEventComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnAuthorizedToLogin },
  },
  {
    path: '',
    redirectTo: '',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
