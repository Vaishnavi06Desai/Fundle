import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { PaymentComponent } from './payment/payment.component';

import { WorkspacesComponent } from './workspaces/workspaces.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SaferoomComponent } from './saferoom/saferoom.component';
import { BeachComponent } from './beach/beach.component';
import { ForestComponent } from './forest/forest.component';
import { HouseComponent } from './house/house.component';
import { MallComponent } from './mall/mall.component';
import { TrendingComponent } from './trending/trending.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home_timeline',
    component: TwitterTimelineComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'workspaces',
    component: WorkspacesComponent
  },
  {
    path: 'workspace',
    component: WorkspaceComponent
  },
  {
    path: 'beach',
    component: BeachComponent
  },
  {
    path: 'forest',
    component: ForestComponent
  },
  {
    path: 'house',
    component: HouseComponent
  },
  {
    path: 'mall',
    component: MallComponent
  },
  {
    path: 'saferoom',
    component: SaferoomComponent
  },
  {
    path: 'invoices',
    component: InvoicesComponent
  },
  {
    path:'trending',
    component: TrendingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
