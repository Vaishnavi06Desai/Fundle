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
      path: 'Workspaces',
      component: WorkspacesComponent
    },
    {
      path: 'workspace',
      component: WorkspaceComponent
    },
    {
      path: 'invoices',
      component: InvoicesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
