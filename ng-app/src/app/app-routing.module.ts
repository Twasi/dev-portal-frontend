import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PluginsComponent} from './plugins/plugins.component';
import {NewComponent} from './plugins/new/new.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthenticationComponent} from './backend/authentication/authentication.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'plugins', component: PluginsComponent },
  { path: 'plugins/new', component: NewComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'authenticate', component: AuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
