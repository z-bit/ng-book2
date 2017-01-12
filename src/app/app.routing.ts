// app.routing.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RedditComponent } from './reddit/reddit.component';
import { FormsComponent } from './forms/forms.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { BasicComponent } from './routing/basic/basic.component';
import { BasicHomeComponent } from './routing/basic/basic-home/basic-home.component';
import { BasicAboutComponent } from './routing/basic/basic-about/basic-about.component';
import { BasicContactComponent } from './routing/basic/basic-contact/basic-contact.component';





export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'hello', component: HelloWorldComponent},
    {path: 'reddit', component: RedditComponent},
    {path: 'inventory', component: InventoryComponent},

    {path: 'forms', component: FormsComponent},
    {path: 'http', component: SimpleHttpComponent},
    {path: 'tube', component: YouTubeSearchComponent},
    {path: 'routing/basic', component: BasicComponent, children: [
        {path: 'home', component:BasicHomeComponent},
        {path: 'about', component: BasicAboutComponent},
        {path: 'contact', component: BasicContactComponent}
    ]}
];
    

