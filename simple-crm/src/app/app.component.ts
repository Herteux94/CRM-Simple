import { Component, inject, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserComponent } from "./user/user.component";
import { RouterModule } from '@angular/router';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { initializeApp } from "firebase/app";
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    DashboardComponent,
    UserComponent,
    UserComponent,
    DashboardComponent,
    RouterModule,
    CommonModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  firebaseConfig = {
    apiKey: "AIzaSyA2m979tV6fpoFORkDqMVKBKTLiu6OMXu0",
    authDomain: "da-crm-simple-system.firebaseapp.com",
    projectId: "da-crm-simple-system",
    storageBucket: "da-crm-simple-system.appspot.com",
    messagingSenderId: "925028707868",
    appId: "1:925028707868:web:d01d4035549391033bb9d9"
  };

  app = initializeApp(this.firebaseConfig);

  title = 'simple-crm';
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  
  constructor() {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
  }
}
export class ToolbarSimpleExample { }
export class SidenavAutosizeExample {
  showFiller = false;
}
