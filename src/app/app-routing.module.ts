import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
 {path: '', redirectTo: 'vanilla', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'vanilla', component: PostComponent},
  {path: 'angular', component: PostComponent},
  {path: 'react', component: PostComponent},
  {path: 'ionic', component: PostComponent},
  {path: 'nodejs', component: PostComponent},
  {path: 'jquery', component: PostComponent},
  {path: 'machine', component: PostComponent},
  {path: 'php', component: PostComponent},
  {path: 'javascript', component: PostComponent},
  {path: 'java', component: PostComponent},
  {path: 'python', component: PostComponent},
  {path: 'google', component: PostComponent},
  {path: 'hadoop', component: PostComponent},
  {path: 'database', component: PostComponent},
  {path: 'r', component: PostComponent},
  {path: 'interview', component: PostComponent},
  {path: 'contest', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
