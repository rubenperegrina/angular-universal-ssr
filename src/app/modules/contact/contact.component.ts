import { Component, Inject, OnInit } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PlatformConfig } from '@angular/platform-server';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lat!: number;
  lng!: number;
  constructor(
    @Inject(PLATFORM_ID) private platformId: PlatformConfig
  ) { }

  ngOnInit(): void {
    this.getPosition()
  }

  getPosition() {
    if(isPlatformBrowser(this.platformId)) {
      //Client code only
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }
      )
    }
    if(isPlatformServer(this.platformId)) {
      //Server code only
    }
  }
}
