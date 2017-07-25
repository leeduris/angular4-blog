import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InstagramService {  
  access_token: string='************************';
  constructor(private jsonp: Jsonp) {
    console.log('Instagram Service Initialized...');
  }

  getUserSelf() {
    let instagramUrl = 'https://api.instagram.com/v1/users/self/media/liked?callback=JSONP_CALLBACK&access_token=' + this.access_token;
    return this.jsonp.get(instagramUrl).map((response: any) =>
                    response.json());
  }
}
   
