import { Component, OnInit, ElementRef, AfterViewChecked, ViewChild } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewChecked {

  blogs: any[];
  path: string='';
  selectedblogs: any[]=[];
  searchDesc: string=null;
  searchTag: boolean=true;

  constructor(private el: ElementRef, private postService: PostService,
              private router: Router, private highService : HighlightJsService) {
  }

  ngOnInit() {
    this.path=this.router.url.substring(1);
    this.postService.getPosts().subscribe((blogs) => {
      this.blogs = blogs; 
      console.log(this.blogs);
      for(let i=0; i<this.blogs.length; i++) {
        if(this.blogs[i].theme == this.path) {
          this.selectedblogs.push(this.blogs[i]);
        }
      }
    });
  }

  ngAfterViewChecked() {
    let codeBlocks = this.el.nativeElement.querySelectorAll('pre code');
    for(let codeBlock of codeBlocks) {
       this.highService.highlight(codeBlock);
    }

  }

  @ViewChild('dataContainer') dataContainer: ElementRef;

  loadData(data) {
        this.dataContainer.nativeElement.innerHTML = data;
    }


  toggleSearchTag(page) {
    if(page!="1") {
        this.searchTag=false;
    } else {
        this.searchTag=true;
    }
  }

  refresh(event) {
    let myiframe = this.el.nativeElement.querySelector('.embeddedFrame');
    myiframe.src += '';
  }
}
