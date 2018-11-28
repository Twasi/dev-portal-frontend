import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Observable} from 'rxjs';
import {ApiService} from './backend/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  version = 'v1.1';
  apiVersion = 'none';
  loginValid: boolean|null = null;
  loggedIn$: Observable<boolean> = this.apiService.isAuthenticated();

  constructor(
    private appService: AppService,
    private apiService: ApiService
  ) {
    this.loggedIn$.subscribe(value => this.loginValid = value);
  }

  ngOnInit(): void {
    this.appService.getApiVersion(ver => this.apiVersion = ver);
  }
}
