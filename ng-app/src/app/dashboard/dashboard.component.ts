import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  breakpoint: number;

  constructor() {
  }

  ngOnInit() {
    this.updateGrid(window.innerWidth);
  }

  onResize(event) {
    this.updateGrid(event.target.innerWidth);
  }

  private updateGrid(windowSize) {
    if (windowSize <= 850) {
      this.breakpoint = 1;
    } else if (windowSize <= 1500) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 4;
    }
  }
}
