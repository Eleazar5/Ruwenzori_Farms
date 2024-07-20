import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Products {
  icon: string;
  name: string;
  o_price: number;
  c_price: number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  phone_no:string = environment.phone_number
  email:string = environment.email
  facebook:string = environment.facebook_link
  instagram:string = environment.instagram_link
}
