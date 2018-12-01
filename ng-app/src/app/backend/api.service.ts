import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DevpConfigService} from '../../devp-config.service';
import {Observable, Observer} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private config;
  private api: ApiRequst;

  constructor(
    private http: HttpClient,
    private configService: DevpConfigService,
    private matSnackBar: MatSnackBar,
  ) {
    this.config = configService.getConfig();
    this.api = new ApiRequst(this.http, this.config['api-url'], this.matSnackBar);
  }

  public isAuthenticated(): Observable<AuthState> {
    return this.api.authenticated;
  }

  authenticate() {
    this.api.authenticateUser();
  }
}

class ApiRequst {

  private authToken: string;
  public authenticated: Observable<AuthState>;
  private authenticatedObserver: Observer<AuthState>;

  private setObserver(observer) {
    this.authenticatedObserver = observer;
    observer.next(AuthState.LOGGED_OUT);
  }

  constructor(
    private http: HttpClient,
    private baseUrl: string,
    private snackBar: MatSnackBar
  ) {
    this.authenticated = new Observable(this.setObserver);
  }

  public authenticatedGet(path: string, options: object): Promise<any> {
    const http = this.http, retryCall = () => this.authenticatedGet(path, options);
    return new Promise<object>(resolve => {
      http.get(this.baseUrl + '/api/withtoken/' + this.authToken + '/' + path, options).toPromise().then(data => {
        if (data['status'] === 'success') {
          resolve(data['result']);
        } else {
          this.handleRequestError(data, retryCall, resolve);
        }
      });
    });
  }

  public authenticatedPost(path: string, options: object): Promise<any> {
    const http = this.http, retryCall = () => this.authenticatedPost(path, options);
    return new Promise<object>(resolve => {
      http.post(this.baseUrl + '/api/withtoken/' + this.authToken + '/' + path, options).toPromise().then(data => {
        if (data['status'] === 'success') {
          resolve(data['result']);
        } else {
          this.handleRequestError(data, retryCall, resolve);
        }
      });
    });
  }

  private setAuthState(state: AuthState) {
    this.authenticatedObserver.next(state);
  }

  public authenticateUser(): Promise<boolean> {
    // this.setAuthState(AuthState.LOGGING_IN);
    return new Promise<boolean>(resolve => {
      const popup = window.open(
        location.origin + '/authenticate',
        'TwasiDev-Authentication',
        'width=700,height=500,status=yes,scrollbars=yes,resizable=yes'
      );
      popup.onload = () => {
        setTimeout(() => {
          popup.window['onAuthenticate'] = () => {
            console.log('Resolver Test');
          };
        });
      };
    });
  }

  private handleRequestError(
    response: object, // The unsuccessful response from the API
    retryCall: () => Promise<any>, // The original API-call to make a recall on Problem fix
    resolver: (value?: (PromiseLike<any> | any)) => void // The original response resolver to pass the new response to the old Promise
  ) {
    if (response['status'] === 'InvalidToken') {
      this.snackBar.open('You were logged out. Trying to authenticate again...');
    }
  }

}

export enum AuthState {
  LOGGED_IN,
  LOGGED_OUT,
  LOGGING_IN
}
