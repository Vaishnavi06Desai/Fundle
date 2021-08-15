import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

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
import { WorkspaceComponent } from './workspace/workspace.component';
// import {} from '@angular/material'
import { TooltipModule } from 'ng2-tooltip-directive';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InvoicesComponent } from './invoices/invoices.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    NavbarComponent,
    NavdrawerComponent,
    WorkspacesComponent,
    ProjectsComponent,
    FormComponent,
    WorkspaceComponent,
    InvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatTooltipModule,
    TooltipModule,
		ReactiveFormsModule,
    ChartsModule
	],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
