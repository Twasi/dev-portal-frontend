import {Component, OnInit} from '@angular/core';
import {ptConfig} from './dep-particles-config';

@Component({
  selector: 'app-devp-particles',
  templateUrl: './devp-particles.component.html',
  styleUrls: ['./devp-particles.component.scss']
})
export class DevpParticlesComponent implements OnInit {

  params: object = ptConfig;

  constructor() {
  }

  ngOnInit() {
  }

}
