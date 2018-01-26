import { Component } from '@angular/core';

@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartJSComponent {

  // lineChart
  public lineChartDataMat: Array<any> = [
    {data: [0, 0, 23, 55, 65, 80, 85], label: 'Pontuação'},
  ];
  public lineChartLabelsMat: Array<any> = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
  public lineChartOptionsMat: any = {
    animation: false,
    responsive: true
  };
  public lineChartColoursMat: Array<any> = [
    { // grey
      backgroundColor: 'rgba(78,189,116,0.2)',
      borderColor: 'rgba(78,189,116,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegendMat = true;
  public lineChartTypeMat = 'line';




  public lineChartDataLog: Array<any> = [
    {data: [0, 0, 0, 20, 50, 80, 85], label: 'Pontuação'},
  ];
  public lineChartLabelsLog: Array<any> = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
  public lineChartOptionsLog: any = {
    animation: false,
    responsive: true
  };
  public lineChartColoursLog: Array<any> = [
    { // grey
      backgroundColor: 'rgba(33,168,216,0.2)',
      borderColor: 'rgba(33,168,216,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegendLog = true;
  public lineChartTypeLog = 'line';



  // Radar
  public radarChartLabelsMat: string[] = ['Fração', 'Potencia', 'Fatoração', 'Funções', 'Exponencial'];

  public radarChartDataMat: any = [
    {data: [100, 72, 50, 81, 0], label: 'Matematica'}
  ];
  public radarChartColoursMat: Array<any> = [
    { // grey
      backgroundColor: 'rgba(78,189,116,0.2)',
      borderColor: 'rgba(78,189,116,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public radarChartTypeMat = 'radar';

  // Radar
  public radarChartLabelsLog: string[] = ['ModusPonens', 'Falacia', 'Indução', 'Teoremas'];

  public radarChartDataLog: any = [
    {data: [30, 42, 0, 81], label: 'Logica'}
  ];
  public radarChartColoursLog: Array<any> = [
    { // grey
      backgroundColor: 'rgba(33,168,216,0.2)',
      borderColor: 'rgba(33,168,216,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public radarChartTypeLog = 'radar';


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
