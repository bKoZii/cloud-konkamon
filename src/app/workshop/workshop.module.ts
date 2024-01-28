import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { WorkshopComponent } from './workshop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentListComponent } from './firebase/comment-list/comment-list.component';
import { UsenameDialogComponent } from './firebase/usename-dialog/usename-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { WorkshopRoutingModule } from './workshop-routing.module';
import { MemberComponent } from './member/member.component';
import { MemberModalComponent } from './member/member-modal/member-modal.component';
import { WorkshopcardComponent } from './workshopcard/workshopcard.component';

@NgModule({
  declarations: [
    WorkshopComponent,
    TwowaybindingComponent,
    FirebaseComponent,
    CommentListComponent,
    UsenameDialogComponent,
    MemberComponent,
    MemberModalComponent,
    WorkshopcardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    WorkshopRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  bootstrap:[WorkshopComponent]
})
export class WorkshopModule { }