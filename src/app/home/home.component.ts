import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';

import { WeatherService } from '../data/weather-data.service';
import { createTemplateData } from '@angular/core/src/view/refs';
import { DashboardService } from '../data/dashboard.service';

@Component({
  selector: 'app-general',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private weatherDataService: WeatherService,
    private dashboardService: DashboardService) { }

  options: GridsterConfig;
  dashboard: Array<GridsterItem> = this.dashboardService.dashboard;


  //

  nameInputValue = '';

  // API DATA DECLARATIONS

  minTemp = [1, 2, 1, 5, 4, 3, 1];
  maxTemp = [7, 8, 10, 6, 10, 6, 7];
  temperature = [4, 6, 5, 5, 8, 4, 5];
  dewPoint = [-1, -2, 0, 1, -2, -3, 0];
  windSpeed = [10, 15, 12, 13, 15, 17, 20];
  windDirection;
  barometricPressure = [1005, 1010, 1004, 1008, 1015, 1020, 1025];
  visibility;
  sunrise;
  sunset;

  // CHART ATRIBUTES DECLARATIONS

  chartLabels = ['monday', 'tuesday', 'wednessday',
    'thursday', 'friday', 'saturday', 'sunday'];
  chartLengend = true;
  public chartData;
  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  ngOnInit() {

    this.options = {
      gridType: GridType.Fixed,
      compactType: CompactType.CompactUp,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 18,
      minRows: 1,
      maxRows: 18,
      maxItemCols: 18,
      minItemCols: 5,
      maxItemRows: 18,
      minItemRows: 3,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 5,
      defaultItemRows: 3,
      fixedColWidth: 70,
      fixedRowHeight: 70,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        delayStart: 120,
        enabled: true,
        ignoreContentClass: 'grid-item',
        ignoreContent: false,
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.None,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };

    // [
    //   {
    //     cols: 3, rows: 3, y: 0, x: 0,
    //     hasContent: true,
    //     hasChartSelection: true,
    //     hasDataselection: false,
    //     maxItemRows: 2,
    //     maxItemCols: 2,
    //     chartType: null,
    //     minItemRows: 1,
    //     minItemCols: 1,
    //     dragEnabled: true,
    //     resizeEnabled: true,
    //     label: 'Test Label'
    //   }
    // ];

    // GETTING DATA FROM API AND SAVING TO VARIABLES ABOVE

    // this.weatherDataService.getAll()
    //   .subscribe(res => {

    //     // console.log(res);
    //     this.maxTemp = res.map(res => res.dailyHighTemp);
    //     this.minTemp = res.map(res => res.dailyMinTemp);
    //     this.temperature = res.map(res => res.temperature);
    //     this.dewPoint = res.map(res => res.dewPoint);
    //     this.windSpeed = res.map(res => res.windSpeed);
    //     this.windDirection = res.map(res => res.windDirection);
    //     this.barometricPressure = res.map(res => res.barometricPressure);
    //     this.visibility = res.map(res => res.visibility);
    //     this.sunrise = res.map(res => res.sunrise);
    //     this.sunset = res.map(res => res.sunset);

    //   })

  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboardService.addItem();
  }

  onKey(event: any) {
    this.nameInputValue = event.target.value;
  }

  addName($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    let itemIndex = this.dashboard.indexOf(item);
    this.dashboard[itemIndex].name = this.nameInputValue;
    if (this.dashboard[itemIndex].name) {
      this.dashboard[itemIndex].hasName = true;
    }
  }




  // -- BELOW IS CHART TYPE SELECTION

  addLine($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    let itemIndex = this.dashboard.indexOf(item);
    // console.log(itemIndex);
    this.dashboard[itemIndex].hasChartSelection = true;
    // this.chartType = 'line';
    this.dashboard[itemIndex].dashboardChartType = 'line';
  }



  addBar($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    let itemIndex = this.dashboard.indexOf(item);
    // console.log(itemIndex);
    this.dashboard[itemIndex].hasChartSelection = true;
    // this.chartType = 'bar';
    this.dashboard[itemIndex].dashboardChartType = 'bar';
    // if (this.dashboard[0].hasChartSelection == true) {
    //   console.log("works")
    // }
  }

  addDoughnut($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    let itemIndex = this.dashboard.indexOf(item);
    // console.log(itemIndex);
    this.dashboard[itemIndex].hasChartSelection = true;
    // this.chartType = 'doughnut';
    this.dashboard[itemIndex].dashboardChartType = 'doughnut';
  }

  addRadar($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    let itemIndex = this.dashboard.indexOf(item);
    // console.log(itemIndex);
    this.dashboard[itemIndex].hasChartSelection = true;
    // this.chartType = 'radar';
    this.dashboard[itemIndex].dashboardChartType = 'radar';
  }

  addPie($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    let itemIndex = this.dashboard.indexOf(item);
    // console.log(itemIndex);
    this.dashboard[itemIndex].hasChartSelection = true;
    // this.chartType = 'pie';
    this.dashboard[itemIndex].dashboardChartType = 'pie';
  }

  addPolar($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    let itemIndex = this.dashboard.indexOf(item);
    // console.log(itemIndex);
    this.dashboard[itemIndex].hasChartSelection = true;
    // this.chartType = 'polarArea';
    this.dashboard[itemIndex].dashboardChartType = 'polarArea';
  }


  // BELOW IS CHART DATA SELECTION

  addTemps($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    let itemIndex = this.dashboard.indexOf(item);

    this.dashboard[itemIndex].dashboardData = [{ data: this.temperature, label: 'Daily Temperatures' }]
    this.dashboard[itemIndex].hasDataSelection = true;
  }

  addMinMax($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    let itemIndex = this.dashboard.indexOf(item);

    this.dashboard[itemIndex].dashboardData = [
      { data: this.minTemp, label: 'Low Temperatures' },
      { data: this.maxTemp, label: 'High Temperatures' }
    ];
    this.dashboard[itemIndex].hasDataSelection = true;
  }

  addDew($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    let itemIndex = this.dashboard.indexOf(item);

    this.dashboard[itemIndex].dashboardData = [{ data: this.dewPoint, label: 'Dew Point' }]
    this.dashboard[itemIndex].hasDataSelection = true;
  }

  addWind($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    let itemIndex = this.dashboard.indexOf(item);

    this.dashboard[itemIndex].dashboardData = [{ data: this.windSpeed, label: 'Wind Speed (Km/h)' }]
    this.dashboard[itemIndex].hasDataSelection = true;
  }

  addBaro($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    let itemIndex = this.dashboard.indexOf(item);

    this.dashboard[itemIndex].dashboardData = [
      { data: this.barometricPressure, label: 'Barometric Pressure' }
    ]
    this.dashboard[itemIndex].hasDataSelection = true;
  }

}
