import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { RedditComponent } from './reddit/reddit.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FormsComponent } from './forms/forms.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { youTubeServiceInjectables } from './you-tube-search/you-tube-search.component';
import { YouTubeService } from './you-tube-search/you-tube-search.component';


import { UserItemComponent } from './hello-world/user-list/user-item/user-item.component';
import { UserListComponent } from './hello-world/user-list/user-list.component';
import { ArticleComponent } from './reddit/article/article.component';
import { BreadcrumpsComponent } from './inventory/breadcrumps/breadcrumps.component';
import { NavigationComponent } from './inventory/navigation/navigation.component';
import { ProductListComponent } from './inventory/product-list/product-list.component';
import { ProductComponent } from './inventory/product-list/product/product.component';
import { DepartmentComponent } from './inventory/product-list/product/department/department.component';
import { ImageComponent } from './inventory/product-list/product/image/image.component';
import { PriceComponent } from './inventory/product-list/product/price/price.component';
import { SearchBoxComponent } from './you-tube-search/search-box/search-box.component';
import { SearchResultComponent } from './you-tube-search/search-result/search-result.component';
import { BasicComponent } from './routing/basic/basic.component';
import { MusicComponent } from './routing/music/music.component';
import { BasicHomeComponent } from './routing/basic/basic-home/basic-home.component';
import { BasicAboutComponent } from './routing/basic/basic-about/basic-about.component';
import { BasicContactComponent } from './routing/basic/basic-contact/basic-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloWorldComponent,
    RedditComponent,
    InventoryComponent,
    FormsComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent,
    UserItemComponent,
    UserListComponent,
    ArticleComponent,
    BreadcrumpsComponent,
    NavigationComponent,
    ProductListComponent,
    ProductComponent,
    DepartmentComponent,
    ImageComponent,
    PriceComponent,
    SearchBoxComponent,
    SearchResultComponent,
    BasicComponent,
    MusicComponent,
    BasicHomeComponent,
    BasicAboutComponent,
    BasicContactComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
      youTubeServiceInjectables,
      YouTubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
