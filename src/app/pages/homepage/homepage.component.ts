import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  isSidebarToggled:boolean = true;
  userData:any;

  constructor(
    private router: Router,
    private storageService: StorageService,
  ) {}

  ngOnInit(): void {
    this.userData = this.storageService.getJsonData('userData');
  }

  toggleSidebar() {
    this.isSidebarToggled = !this.isSidebarToggled;
  }

  logout(){
    this.storageService.clearData();
    this.router.navigate(['/']);
  }
}
