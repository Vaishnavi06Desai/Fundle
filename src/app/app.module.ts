import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavdrawerComponent } from './navdrawer/navdrawer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkspacesComponent } from './workspaces/workspaces.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    NavbarComponent,
    NavdrawerComponent,
    WorkspacesComponent,
    ProjectsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
		ReactiveFormsModule
	],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
