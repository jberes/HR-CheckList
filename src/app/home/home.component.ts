import { Component, OnInit } from '@angular/core';
import { JSONNorthwindCustomersService } from '../services/json-northwind-customers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public jSONNorthwindCustomersCustomers: any = null;

  constructor(
    private jSONNorthwindCustomersService: JSONNorthwindCustomersService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.jSONNorthwindCustomersService.getCustomers().subscribe(data => this.jSONNorthwindCustomersCustomers = data);
  }
}
