import { Component } from '@angular/core';
import { ReqService } from 'src/app/services/req.service';
import { Router } from '@angular/router';

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
  isModalOpen = false;
  alldashitems: any;

  constructor(
    private router: Router,
    private reqService: ReqService,
  ) {}

  ngOnInit(): void {
    this.getcount_stats();
  }

  getcount_stats(){
    this.reqService.count_stats().subscribe(
      (res: any) => {        
        this.alldashitems = Object.keys(res.data[0]).map(key => {
          return { title: key, item_val: res.data[0][key] };
        });
      },  
      (error: any) => {         
        console.log(error)
      }
    );
  }

  messages: Sms[] = [
    { date:'2024-08-03', time: '10:30:00', contact: 'All Customers', body: "This is a test date", status: "Resolved" },
    { date:'2024-08-03', time: '11:00:00', contact: 'Recent Chats', body: "This is a test date", status: "Resolved" },
    { date:'2024-08-03', time: '11:30:00', contact: 'Recent Sales', body: "This is a test date", status: "Resolved" }
  ];

  openPage(pageref:any) {
    this.router.navigate(['/index/'+pageref]);
  }
}
