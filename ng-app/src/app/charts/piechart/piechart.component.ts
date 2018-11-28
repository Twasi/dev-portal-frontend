import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;

  constructor() {
  }

  chart: any;

  ngOnInit() {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['test1', 'test2', 'test3', 'test4'],
        datasets: [{
          label: 'Important development data!',
          backgroundColor: ['#db2b63', '#dd4072', '#e55069', '#e55050'],
          data: [1337, 1337, 1337, 1337]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Please look at this important doughnut developer chart!',
          fontColor: 'white'
        },
        legend: {
          labels: {
            fontColor: 'white'
          }
        },
        aspectRatio: 1
      }
    });
  }

}
