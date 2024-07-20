import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cookies-consent',
  templateUrl: './cookies-consent.component.html',
  styleUrls: ['./cookies-consent.component.scss']
})
export class CookiesConsentComponent {
  contactmail:string = environment.email;
  title: string = environment.title;
  activeSection: string | null = null;
  isMenuOpen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(environment);
  }
  
  goToLogin() {
    this.router.navigate(['login']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(section: string) {
    this.router.navigate([], { fragment: section, replaceUrl: true });

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen = false; 
  }
}
