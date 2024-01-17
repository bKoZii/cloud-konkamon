import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data:{title:'Home'}},
  { path: 'home', component: HomeComponent, data: {title: 'Home'}},
  { path: 'project', component:ProjectComponent, data: {title: 'Project'},children:[
    { path: '', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)}]},
    { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
