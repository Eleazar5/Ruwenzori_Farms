import { Component } from '@angular/core';

interface DashboardItems {
  title: string;
  item_val: number;
  scale: any;
}

interface Sms {
  date: string;
  time: string;
  contact: string;
  body: string;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  alldashitems: DashboardItems[] = [
    { title: 'All Customers', item_val: 160, scale: 150 },
    { title: 'Recent Chats', item_val: 150, scale: 140 },
    { title: 'Recent Sales', item_val: 200, scale: 180 },
    { title: 'Farmer Goals', item_val: 130, scale: 120 },
    { title: 'Recent Adverts', item_val: 40, scale: 30 },
    { title: 'Partners', item_val: 30, scale: 20 },
    { title: 'Recent Payables', item_val: 10, scale: 20 },
    { title: 'Sale Requests', item_val: 10, scale: 20 }
  ];

  messages: Sms[] = [
    { date:'2024-08-03', time: '10:30:00', contact: 'All Customers', body: "This is a test date", status: "Resolved" },
    { date:'2024-08-03', time: '11:00:00', contact: 'Recent Chats', body: "This is a test date", status: "Resolved" },
    { date:'2024-08-03', time: '11:30:00', contact: 'Recent Sales', body: "This is a test date", status: "Resolved" }
  ];
}
