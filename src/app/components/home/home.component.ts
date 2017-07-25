import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../../services/instagram.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit { 
  medias: Array<string>;
  instaInfos: any[]=[];

  constructor( private instagramService: InstagramService) { 
  }

  ngOnInit() {
    console.log('start home');

    this.instagramService.getUserSelf().subscribe(data => {   
      this.medias=data['data'];

    for (var i=0; i<this.medias.length; i++) {
       this.instaInfos.push(this.medias[i]);
       }      
    });

  }
} 