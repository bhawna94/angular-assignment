
import {ActivatedRoute} from '@angular/router';

import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'app-youtubevideos',
  templateUrl: './youtubevideos.component.html',
  styleUrls: ['./youtubevideos.component.css']
})
export class YoutubevideosComponent {
  url: string;
  link: SafeUrl;

  constructor(private router: ActivatedRoute, public domsanitizer: DomSanitizer) {
    this.videourl();
  }

  videourl() {
    this.url = 'https://www.youtube.com/embed/' + this.router.snapshot.params['ref'];
    this.link = this.domsanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}



