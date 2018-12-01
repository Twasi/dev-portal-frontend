import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PluginsComponent} from './plugins/plugins.component';
import {NewComponent} from './plugins/new/new.component';
import {MatInputModule} from '@angular/material/input';
import {NotFoundComponent} from './not-found/not-found.component';
import {
  MatButtonToggleModule,
  MatCheckboxModule, MatExpansionModule,
  MatGridListModule, MatProgressBarModule, MatProgressSpinnerModule, MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MarkdownComponent} from './markdown/markdown.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './user/user.component';
import {PiechartComponent} from './charts/piechart/piechart.component';
import {NewPluginSetupComponent} from './plugins/new/new-plugin-setup/new-plugin-setup.component';
import { AuthenticationComponent } from './backend/authentication/authentication.component';
import {ParticlesModule} from 'angular-particle';
import { DevpParticlesComponent } from './other/particles/devp-particles/devp-particles.component';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PluginsComponent,
    NewComponent,
    NotFoundComponent,
    MarkdownComponent,
    UserComponent,
    PiechartComponent,
    NewPluginSetupComponent,
    AuthenticationComponent,
    DevpParticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatBadgeModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatGridListModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    FormsModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    ParticlesModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
