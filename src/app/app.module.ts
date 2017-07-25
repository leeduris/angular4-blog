import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, JsonpModule } from '@angular/http';
import { MaterialModule, OverlayContainer, FullscreenOverlayContainer } from '@angular/material';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { AppRoutingModule } from './app-routing.module';
import { PostService } from './services/post.service';
import { InstagramService } from './services/instagram.service';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './components/home/home.component';
import { ArrayFilterPipe } from './pipes/array-filter.pipe';
import { SafehtmlPipe } from './pipes/safehtml.pipe';
import { SafeurlPipe } from './pipes/safeurl.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ArrayFilterPipe,
    SafehtmlPipe,
    SafeurlPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule,
    HighlightJsModule
  ],
  providers: [
    PostService,
    InstagramService,
    OverlayContainer, 
    FullscreenOverlayContainer,
    HighlightJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
