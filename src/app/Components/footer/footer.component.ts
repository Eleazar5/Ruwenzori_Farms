import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear:any;
  title:string = environment.title
  facebook:string = environment.facebook_link
  youtube:string = environment.youtube_link
  twitter:string = environment.x_link
  instagram:string = environment.instagram_link
  phone_no:string = environment.phone_number
  email:string = environment.email
  copyright:string = environment.copyright

  ngOnInit() {
    this.getCurrentYear();
  }

  getCurrentYear(){
    this.currentYear = new Date().getFullYear();
  }
  
}
