import {Component, OnInit} from '@angular/core';
import {PluginService} from './plugin.service';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {

  plugins: object[];

  constructor(private pluginService: PluginService) {
    this.plugins = pluginService.getTestPluginData();
  }

  ngOnInit() {
  }

}
