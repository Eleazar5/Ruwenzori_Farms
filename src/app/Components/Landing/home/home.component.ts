import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    '../../../../assets/onionimg.jpg',
    '../../../../assets/pawpaw.png',
    '../../../../assets/tomatoes.png'
  ];

  currentImageIndex = 0;
  intervalId: any;
  activeSection: string | null = null;
  isMenuOpen: boolean = false;

  title:string = environment.title
  facebook:string = environment.facebook_link
  youtube:string = environment.youtube_link
  twitter:string = environment.x_link
  instagram:string = environment.instagram_link
  phone_no:string = environment.phone_number
  phone_no_2:string = environment.phone_number_2
  email:string = environment.email

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.startCarousel();
    this.route.fragment.subscribe(fragment => {
      this.activeSection = fragment;
    });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 4000); // Change image every 3 seconds
  }

  scrollToSection(section: string) {
    this.router.navigate([], { fragment: section, replaceUrl: true });

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen = false; 
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex > 0) ? this.currentImageIndex - 1 : this.images.length - 1;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex < this.images.length - 1) ? this.currentImageIndex + 1 : 0;
  }

}
