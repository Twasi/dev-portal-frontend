import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DevpConfigService} from '../devp-config.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  config;

  constructor(private http: HttpClient, private cs: DevpConfigService) {
    this.config = this.cs.getConfig();
  }

  getApiVersion(ver) {
    this.http.get(this.config['api-url'] + '/api/info/version') // Request version from API
      .toPromise().then(data2 => ver(data2['version'])); // Await response and pass it to callback
  }

  getApiAuthors() {
    return this.http.get(this.config['api-url'] + '/api/info/version')['authors'];
  }
}
