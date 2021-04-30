import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from '../../service/dataservic/dataservice.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  searchValue:any;
  constructor(private dataService:DataserviceService) { }

  ngOnInit(): void {
  }

  search(event:any) {
    console.log(event.target.value);
    let values = event.target.value;
    this.dataService.changeMessage(values);
  }
}
