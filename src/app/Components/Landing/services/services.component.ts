import { Component } from '@angular/core';
interface Products {
  icon: string;
  name: string;
  o_price: number;
  c_price: number;
}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  allproducts: Products[] = [
    { icon: '../../../../assets/onion.png', name: 'Onions', o_price: 160, c_price: 150 },
    { icon: '../../../../assets/watermelon.png', name: 'Water Melon', o_price: 150, c_price: 140 },
    { icon: '../../../../assets/tomatoes.png', name: 'Tomatoes', o_price: 200, c_price: 180 },
    { icon: '../../../../assets/pawpaw.png', name: 'Pawpaw', o_price: 130, c_price: 120 },
    { icon: '../../../../assets/pepper.png', name: 'Pepper', o_price: 40, c_price: 30 },
    { icon: '../../../../assets/maize.png', name: 'Maize', o_price: 30, c_price: 20 },
  ];
}
