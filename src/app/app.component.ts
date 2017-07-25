import { Component, ViewEncapsulation, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { PostService } from './services/post.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  tutorials: any[];
  blogs: any[];
  blogCnt: number[]=[];
  categoryCnt: number[]=[];

  constructor( private blogService: PostService) { }

  ngOnInit() {
    console.log('start app');

    for(let i=0; i<this.navTutorials.length; i++) {
      this.blogCnt[i] = 0;
    }

    for(let i=0; i<this.navCategory.length; i++) {
      this.categoryCnt[i] = 0;
    }  

    this.blogService.getPosts().subscribe(blogs => {      
      this.blogs = blogs;

      for(let i=0; i<this.blogs.length; i++) {
        for(let j=0; j<this.navTutorials.length; j++) {
          if(this.blogs[i].theme == this.navTutorials[j].route) {
            this.blogCnt[j]++;
          }     
        }
        for(let j=0; j<this.navCategory.length; j++){
          if(this.blogs[i].category == this.navCategory[j]) {
            this.categoryCnt[j]++;
          }     
        }
      }          
    }); 
  }

  searchTitle=null;
  showSearch: boolean = true;  
  toggleSearch() {
    this.showSearch = !this.showSearch;
  } 

  lock: boolean = true;
  toggleLock() {
    this.lock = !this.lock;
  }

  navCategory = [
    'js',
    'oop',
    'data',
    'career'
  ];
  
  navTutorials = [
    { route : 'vanilla',
      title: 'Pure JS',
      icon: 'extension',
      category: 'js'
    },
    { route : 'angular',
      title: 'Angular JS',
      icon: 'g_translate',
      category: 'js'
    },
    { route : 'react',
      title: 'React JS',
      icon: 'group_work',
      category: 'js'
    },
    { route : 'ionic',
      title: 'Ionic',
      icon: 'perm_device_information',
      category: 'js'
    },
    { route : 'nodejs',
      title: 'Node',
      icon: 'explicit',
      category: 'js'
    },  
    { route : 'jquery',
      title: 'jQuery Mobile',
      icon: 'done_all',
      category: 'js'
    }, 
    { route : 'machine',
      title: 'Machine Learning',
      icon: 'build',
      category: 'js'
    },    
    { route : 'java',
      title: 'Java',
      icon: 'gamepad',
      category: 'oop'
    },
    {
      route : 'php',
      title: 'PHP',
      icon: 'donut_small',
      category: 'oop'
    },
    { route : 'python',
      title: 'Python',
      icon: 'launch',
      category: 'oop'
    },
    { route : 'google',
      title: 'Google',
      icon: 'store_small_directory',
      category: 'data'
    },
    { route : 'hadoop',
      title: 'Hadoop',
      icon: 'toll',
      category: 'data'
    },
    { route : 'database',
      title: 'Database',
      icon: 'add_alert',
      category: 'data'
    },
    { route : 'r',
      title: 'R',
      icon: 'timeline',
      category: 'data'
    },  
    { route : 'interview',
      title: 'Interview',
      icon: 'local_pizza',
      category: 'career'
    },
    { route : 'contest',
      title: 'Contest',
      icon: 'history',
      category: 'career'
    }  
  ];
}

