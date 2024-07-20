import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = environment.title;

  cookieMessage = 'We use cookies to ensure you get the best experience on our website.';
  cookieDismiss = 'Got it!';
  cookieLinkText = 'Learn more';

  ngOnInit() {
    let cc = window as any;
       cc.cookieconsent.initialise({
         palette: {
           popup: {
             background: "#18542c"
           },
           button: {
             background: "#ffffff",
             text: "#18542c"
           }
         },
         theme: "classic",
         content: {
           message: this.cookieMessage,
           dismiss: this.cookieDismiss,
           link: this.cookieLinkText,
           href: environment.url + "dataprivacy" 
         }
       });
  }
}
