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
import { UserItemComponent } from './hello-world/user-list/user-item/user-item.component';
import { UserListComponent } from './hello-world/user-list/user-list.component';
import { ArticleComponent } from './reddit/article/article.component';

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
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
