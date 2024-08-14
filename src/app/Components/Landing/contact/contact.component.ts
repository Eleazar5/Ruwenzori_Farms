import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  phone_no:string = environment.phone_number
  email:string = environment.email
  facebook:string = environment.facebook_link
  instagram:string = environment.instagram_link

  constructor(private renderer: Renderer2) {}
  
  ngOnInit(): void {
    this.loadTwitterScript(); 
  }

  ngAfterViewInit(): void {
    this.renderLatestTweet();
  }

  loadTwitterScript(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    this.renderer.appendChild(document.body, script);
  }

  renderLatestTweet(): void {
    this.renderer.listen('window', 'load', () => {
      const tweetContainer = document.getElementById('latest-tweet');
      const twttr = (window as any).twttr; 
      if (tweetContainer && twttr) {
        this.renderer.setAttribute(tweetContainer, 'data-tweet-limit', '1');
        this.renderer.setAttribute(tweetContainer, 'data-theme', 'light');
        // twttr.widgets.createTimeline(
        //   {
        //     sourceType: 'profile',
        //     screenName: 'eleazar_simba'
        //   },
        //   tweetContainer,
        //   {
        //     tweetLimit: 1,
        //     chrome: 'noheader nofooter noborders',
        //     theme: 'light'
        //   }
        // );
        twttr.widgets.createTweet(
          '1792239147387609112', 
          tweetContainer,
          {
            theme: 'light',
            conversation: 'none',
          }
        ).then((el: HTMLElement) => {
          console.log('Tweet displayed.');
        }).catch((err: any) => {
          console.error('Error displaying tweet:', err);
        });
      }
    });
  }
  
}
