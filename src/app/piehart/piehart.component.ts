import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-piehart',
  templateUrl: './piehart.component.html',
  styleUrls: ['./piehart.component.css']
})
export class PiehartComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

   ngOnInit() {
   }
  // @Input() data = [];

  // constructor() { }

  // ngOnInit() {
  //   this.chartOptions = {
  //     chart: {
  //       plotBackgroundColor: null,
  //       plotBorderWidth: null,
  //       plotShadow: false,
  //       type: 'pie'
  //     },
  //     title: {
  //       text: 'RANDOM DATA'
  //     },
  //     tooltip: {
  //       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  //     },
  //     plotOptions: {
  //       pie: {
  //         allowPointSelect: true,
  //         cursor: 'pointer',
  //         dataLabels: {
  //           enabled: true,
  //           format: '<b>{point.name}</b>: {point.percentage:.1f} %'
  //         }
  //       }
  //     },
  //     exporting: {
  //       enabled: true
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     series: [{
  //       name: 'Brands',
  //       colorByPoint: true,
  //       data: this.data
  //     }]
  //   };

  //   HC_exporting(Highcharts);

  //   setTimeout(() => {
  //     window.dispatchEvent(
  //       new Event('resize')
  //     );
  //   }, 300);
  // }

}