import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevpConfigService {

  public getConfig(): object {
    return conf;
  }

}

const conf = {
  'api-url': 'http://localhost:3000',
  'twasi-api-url': 'https://api-beta.twasi.net',
  'links': {
    'website': 'https://twasi.net',
    'website-alternatives': [
      'https://twa.si'
    ],
    'panel': 'https://panel-beta.twasi.net',
    'twitter': 'https://twitter.com/TwasiNET',
    'medium': 'https://medium.com/twasi',
    'discord': '',
    'github': {
      'repositories': 'https://github.com/twasi',
      'core': 'https://github.com/twasi/twasi-core',
      'panel': 'https://github.com/twasi/twasi-panel',
      'wiki': 'https://github.com/Twasi/twasi-core/wiki/GettingStarted'
    }
  }
};
