import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopComponent } from './workshop/workshop.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MemberComponent } from './workshop/member/member.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data:{title:'Home'}},
  // { path: 'home', component: HomeComponent, data: {title: 'Home'}},
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'profile', component: ProfileComponent, data: {title: 'Profile'}},
  { path: 'project', component: ProjectComponent ,data:{title: 'Project'}},
  // { path: 'member', component: MemberComponent, data: {title: 'Member'}},
  { path: 'workshop', component:WorkshopComponent, data: {title: 'Workshop'},children:[
    { path: '', loadChildren: () => import('./workshop/workshop.module').then(m => m.WorkshopModule)}]},
    { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
