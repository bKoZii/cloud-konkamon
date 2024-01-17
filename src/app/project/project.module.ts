import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { ProjectComponent } from './project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentListComponent } from './firebase/comment-list/comment-list.component';
import { UsenameDialogComponent } from './firebase/usename-dialog/usename-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProjectComponent,
    TwowaybindingComponent,
    FirebaseComponent,
    CommentListComponent,
    UsenameDialogComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ]
})
export class ProjectModule { }