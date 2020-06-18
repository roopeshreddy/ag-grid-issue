import { Component } from '@angular/core';
import { GridApi, GridReadyEvent, ExcelExportParams } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'agGrid';
  gridApi: GridApi;

  columnDefs = [
    {field: 'make', cellRenderer: (params) => { return `<a href="javascript:;">${params.value}</a>` } },
    {field: 'model' },
    {field: 'price', cellStyle: { 'text-transform': 'none' }}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

onGridReady($event: GridReadyEvent) {
this.gridApi = $event.api;
}

exportToExcel() {
  const params: ExcelExportParams = {
    fileName: 'test',
    exportMode: 'xlsx'
  };
  this.gridApi.exportDataAsExcel(params);
}

}
