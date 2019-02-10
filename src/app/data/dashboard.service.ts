import { Injectable, IterableDiffers } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  dashboard: Array<GridsterItem> = [];

  addItem() {
    this.dashboard.push({
      x: 0, y: 0, cols: 5, rows: 3,
      hasContent: true, hasName: false, name: null,
      hasChartSelection: false, dashboardChartType: null,
      hasDataSelection: false, dashboardData: null
    })
  }

}
