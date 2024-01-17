import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FirebaseComponent } from './firebase/firebase.component';

const routes: Routes = [
  { path: '', redirectTo: 'twowaybinding', pathMatch: 'full' },
  { path: 'twowaybinding', component: TwowaybindingComponent },
  { path: 'firebase', component: FirebaseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule { }
