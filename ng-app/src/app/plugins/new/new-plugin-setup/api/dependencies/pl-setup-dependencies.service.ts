import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlSetupDependenciesService {

  constructor() {
  }

  public getTestData() {
    return testObject;
  }
}

const testObject = [
  {
    id: 'spotifyApi',
    name: 'Spotify API-Wrapper',
    description: 'Integrate Spotify into your plugin! Use the official Spotify-API to control the streamer\'s playback or' +
      'build another useful musically function into your own plugin.',
    default: false
  }, {
    id: 'twitchApi',
    name: 'Twitch API-Wrapper',
    description: 'If you want to interact with the Twitch-API this library is right for you!',
    default: false
  }, {
    id: 'twasiCurrency',
    name: 'Twasi-Currency',
    description: 'This is the global Twasi-Currency system. A unified currency that all plugins can use!',
    default: false
  }, {
    id: 'preselected',
    name: 'Preselected list element! c:',
    description: 'Just an item to show, that Merlin can set preselected values! B-)',
    default: true
  }
];
