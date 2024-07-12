import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  slides = [
    { cname:'Eleazar', caption: "I can't recommend their service enough! The vegetables arrive fresh and in pristine condition every time. It's evident they prioritize quality and customer satisfaction.", rating: 4 },
    { cname:'Daniel', caption: 'The quality of vegetables I get is unmatched. From vibrant greens to ripe tomatoes, each item is handpicked and delivered with care. ', rating: 5 },
    { cname:'Maryanne', caption: "I'm always impressed by the freshness of the vegetables I receive. The service is excellent too, with prompt deliveries that ensure I never run out of healthy ingredients.", rating: 3 }
  ];

  slideIndex = 0;
  dots: any[] = [];

  ngOnInit(): void {
    this.dots = new Array(this.slides.length); 
    this.showSlides();
  }

  showSlides() {
    setInterval(() => {
      this.slideIndex++;
      if (this.slideIndex >= this.slides.length) {
        this.slideIndex = 0;
      }
    }, 3500);
  }

  getStars(rating: number): any[] {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating); 
    }
    return stars;
  }
  
}
