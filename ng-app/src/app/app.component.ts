import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Observable} from 'rxjs';
import {ApiService, AuthState} from './backend/api.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  version = 'v1.1';
  apiVersion = 'none';
  loginValid: AuthState;
  loggedIn$: Observable<AuthState> = this.apiService.isAuthenticated();
  AuthState = AuthState;
  authentication_window: boolean;

  constructor(
    private appService: AppService,
    private apiService: ApiService,
    private router: Router
  ) {
    this.loggedIn$.subscribe(value => this.loginValid = value);
    this.authentication_window = null;
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd)
      ).subscribe((navEnd: NavigationEnd) => {
      this.authentication_window = navEnd.urlAfterRedirects === '/authenticate';
    });
  }

  ngOnInit(): void {
    this.appService.getApiVersion(ver => this.apiVersion = ver);
  }

  login() {
    this.apiService.authenticate();
  }
}
