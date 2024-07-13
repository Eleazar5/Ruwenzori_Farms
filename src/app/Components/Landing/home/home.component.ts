import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    '../../../../assets/onionimg.png',
    '../../../../assets/pawpaw.jpg',
    '../../../../assets/tomatoes.jpg'
  ];

  currentImageIndex = 0;
  intervalId: any;
  activeSection: string | null = null;
  isMenuOpen: boolean = false;

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
