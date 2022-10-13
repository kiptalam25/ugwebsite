import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgImageSliderModule } from 'ng-image-slider';
import { CommonModule, DatePipe } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NewsComponent } from './news/news.component';
import { PostsComponent } from './posts/posts.component';
import { AdvertsComponent } from './adverts/adverts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { AdminComponent } from './admin/admin.component';
import { AppbarComponent } from './appbar/appbar.component';
import { SliderComponent } from './slider/slider.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLeftMenuComponent } from './admin-left-menu/admin-left-menu.component'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs'; 
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { TrendsComponent } from './trends/trends.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminGalleryComponent } from './admin-gallery/admin-gallery.component';
import { AdminDownloadsComponent } from './admin-downloads/admin-downloads.component';
import { AdminAdvertsComponent } from './admin-adverts/admin-adverts.component'; 
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AdminBodyComponent } from './admin-body/admin-body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    PostsComponent,
    AdvertsComponent,
    GalleryComponent,
    DownloadsComponent,
    EventsComponent,
    HomeComponent,
    AdminComponent,
    AppbarComponent,
    SliderComponent,
    TopNewsComponent,
    FooterComponent,
    AdminLeftMenuComponent,
    TrendsComponent,
    AdminMenuComponent,
    AdminNewsComponent,
    AdminPostsComponent,
    AdminEventsComponent,
    AdminGalleryComponent,
    AdminDownloadsComponent,
    AdminAdvertsComponent,
    AdminBodyComponent,
    DashboardComponent,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    CommonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatExpansionModule,
    HttpClientModule,
    MatProgressBarModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
