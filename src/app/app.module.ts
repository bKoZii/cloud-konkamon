import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

import { env } from 'src/env/env';

import { MatDialogModule } from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { WorkshopComponent } from './workshop/workshop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    // MemberComponent,
    ProfileComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(env.firebase), // initialize ตั้งค่าของ firebase ที่กำหนดไว้ใน /src/env/env.ts
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
