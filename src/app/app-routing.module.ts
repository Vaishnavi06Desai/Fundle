import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkspacesComponent } from './workspaces/workspaces.component';
import { WorkspaceComponent } from './workspace/workspace.component';

  
const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
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
      path: 'Workspaces',
      component: WorkspacesComponent
    },
    {
      path: 'workspace',
      component: WorkspaceComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
