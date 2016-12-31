// app.routing.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RedditComponent } from './reddit/reddit.component';
import { FormsComponent } from './forms/forms.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'hello', component: HelloWorldComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'reddit', component: RedditComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'http', component: SimpleHttpComponent},
    {path: 'tube', component: YouTubeSearchComponent}   
];
    

