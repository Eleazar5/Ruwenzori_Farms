import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  isSidebarToggled = true;

  constructor(
    private router: Router,
  ) {}

  toggleSidebar() {
    this.isSidebarToggled = !this.isSidebarToggled;
  }

  logout(){
    console.log('Logout')
    this.router.navigate(['/']);
  }
}
