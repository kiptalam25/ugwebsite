import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAdvertsComponent } from './admin-adverts/admin-adverts.component';
import { AdminDownloadsComponent } from './admin-downloads/admin-downloads.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminGalleryComponent } from './admin-gallery/admin-gallery.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminComponent } from './admin/admin.component';
import { AdvertsComponent } from './adverts/adverts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { TrendsComponent } from './trends/trends.component';

const routes: Routes = [
  {path:"",redirectTo:"/home", pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent,
  children: [
  {path:"",redirectTo:"dashboard", pathMatch:"full"},
    { path: 'dashboard', component: DashboardComponent },
    {path:'admin-downloads',component:AdminDownloadsComponent},
    {path:'admin-events',component:AdminEventsComponent},
    {path:'admin-gallery',component:AdminGalleryComponent},
    {path:'admin-news',component:AdminNewsComponent},
    {path:'admin-posts',component:AdminPostsComponent},
    {path:'admin-adverts',component:AdminAdvertsComponent}
 ]
},
  {path:'news',component:NewsComponent},
  {path:'adverts',component:AdvertsComponent},
  {path:'events',component:EventsComponent},
  {path:'downloads',component:DownloadsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'trends',component:TrendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
