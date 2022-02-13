
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FarmData, FarmDataInterface } from '../../interfaces/table-data'



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['status', 'name', 'farmName', 'variant', "size", "createdAt", "deletedAt" ];
  dropdownValue: string = "";

  farmData = new MatTableDataSource(FarmData);
  dropdownListValues = this.farmData.filteredData

  constructor() { }

  ngAfterViewInit() {
    this.farmData.sort = this.sort;
    this.farmData.paginator = this.paginator;
    this.dropdownListValues = this.farmData.filteredData
  }

  dropdownFilter(dropdownValue: string){
    this.farmData.filter = dropdownValue;
  }

  toggleRemoved(checked: boolean){

  }

  searchFuction(searchPhrase: string){
    setTimeout(() => {
      this.farmData.filterPredicate = (data: FarmDataInterface, filter: string) => data.name.toLowerCase().includes(filter.toLowerCase()) || data?.variant?.toLowerCase().includes(filter.toLowerCase())
      this.farmData.filter = searchPhrase
    }, 2000);

  }

}


