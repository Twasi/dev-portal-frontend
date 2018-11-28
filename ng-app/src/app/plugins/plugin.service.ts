import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PluginService {

  getTestPluginData() {
    return testObject;
  }

  constructor() {
  }
}

const testObject = [
  {
    id: 0,
    dev: {
      id: 1337,
      username: 'DieserMerlin',
      package: 'de.merlinw'
    },
    name: 'magic-tricks',
    version: 'v1.0',
    status: 'pending',
    img: environment.assets + 'images/SVGs/Circle-icons-plugin.svg'
  },
  {
    id: 1,
    dev: {
      id: 1337,
      username: 'Larcce',
      package: 'ninja.lars'
    },
    name: 'roulette-game',
    version: 'v2.1',
    status: 'denied',
    img: environment.assets + 'images/SVGs/Circle-icons-plugin.svg'
  },
  {
    id: 2,
    dev: {
      id: 1337,
      username: 'Blechkelle',
      package: 'de.blechkelle'
    },
    name: 'witze',
    version: 'v24.1',
    status: 'accepted',
    img: environment.assets + 'images/SVGs/Circle-icons-plugin.svg'
  }
];
