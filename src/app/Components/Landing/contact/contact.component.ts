import { Component } from '@angular/core';
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
  allproducts: Products[] = [
    { icon: '../../../../assets/onion.png', name: 'Onions', o_price: 160, c_price: 150 },
    { icon: '../../../../assets/watermelon.png', name: 'Water Melon', o_price: 150, c_price: 140 },
    { icon: '../../../../assets/tomatoes.png', name: 'Tomatoes', o_price: 200, c_price: 180 },
    { icon: '../../../../assets/pawpaw.png', name: 'Paw-paw', o_price: 130, c_price: 120 },
  ];
}
