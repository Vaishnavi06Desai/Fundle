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
import { FormTemplateComponent } from './form-template/form-template.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { WorkspaceComponent } from './workspace/workspace.component';
// import {} from '@angular/material'
import { TooltipModule } from 'ng2-tooltip-directive';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InvoicesComponent } from './invoices/invoices.component';
import { SaferoomComponent } from './saferoom/saferoom.component';
import { BeachComponent } from './beach/beach.component';
import { ForestComponent } from './forest/forest.component';
import { HouseComponent } from './house/house.component';
import { MallComponent } from './mall/mall.component';

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
    FormTemplateComponent,
    TwitterTimelineComponent,
    PaymentComponent,
    WorkspaceComponent,
    InvoicesComponent,
    SaferoomComponent,
    BeachComponent,
    ForestComponent,
    HouseComponent,
    MallComponent
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
    HttpClientModule,
    ChartsModule
	],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
