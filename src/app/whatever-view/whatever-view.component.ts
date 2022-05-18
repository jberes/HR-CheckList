import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { NorthwindCloudDemoAPIService } from '../services/northwind-cloud-demo-api.service';
import { JSONNorthwindOrdersService } from '../services/json-northwind-orders.service';

@Component({
  selector: 'app-whatever-view',
  templateUrl: './whatever-view.component.html',
  styleUrls: ['./whatever-view.component.scss']
})
export class WhateverViewComponent implements OnInit {
  public northwindEmployees: any = null;
  public northwindCloudDemoAPIApiCustomers: any = null;
  public jSONNorthwindOrdersOrders: any = null;

  constructor(
    private northwindService: NorthwindService,
    private northwindCloudDemoAPIService: NorthwindCloudDemoAPIService,
    private jSONNorthwindOrdersService: JSONNorthwindOrdersService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.northwindCloudDemoAPIService.getApiCustomers().subscribe(data => this.northwindCloudDemoAPIApiCustomers = data);
    this.jSONNorthwindOrdersService.getOrders().subscribe(data => this.jSONNorthwindOrdersOrders = data);
  }
}
