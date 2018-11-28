import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlSetupSettingsService {

  constructor() { }

  getTestData() {
    return testObject;
  }
}

const testObject = [
  {
    id: 'isDependency',
    name: 'This plugin is a dependency',
    description: 'If this is set to true your plugin will only provide functions for other plugins and cannot be installed by any ' +
      'streamer. It won\'t have a TwasiUserPlugin-Class (as seen in our API documentations) but can provide a service that can be ' +
      'used by other plugin developers.',
    default: false
  },
  {
    id: 'hasUserInterface',
    name: 'This plugin needs a user interface',
    description: 'Disable this, if your plugin won\'t need any user interface and can be controlled by chat only.',
    default: true
  }
];
