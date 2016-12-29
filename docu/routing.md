#Routing
* generate components first
    * make sure you are in ```<project>``` folder
    * ***ng generate component home***
    * ... generate all components you can think of
    
It turned out to be usefull to have HomeComponent as a starter:
* It follows the same patterns as all other components. 
* Relative references to common assets have always the same path.
* Its a nice place to put your top level navigation.
* The ```<project>```root = ***AppComponent*** is harder to handle as a start page.


* create file ***/src/app/app.routing.ts***
```
    // app.routing.ts
    import { Routes } from '@angular/router';
                                                                                \
    import { HomeComponent } from './home/home.component';                       |
    import { HelloWorldComponent } from './hello-world/hello-world.component';   |  (*)
    ...                                                                         /  
```    
    (*) After all components were generated you can copy this section from app.module.ts as the component are imported ther automatically.
```    
    export const routes: Routes = [
        {path: '', component: HomeComponent},               // to be initially routed to home
        {path: 'home', component: HomeComponent},
        {path: 'hello', component: HelloWorldComponent},
        ...
    ];
```

* edit file ***/src/app/app.module.ts***

insert:
```
    import { RouterModule } from '@angular/router';
    import { routes } from './app.routing';
```
```    
    @NgModule({
      declarations: [
            AppComponent,
            HomeComponent,
            HelloWorldComponent,
            ...
      ],
      imports: [
```      
insert:
```  
            RouterModule.forRoot(routes),
``` 
```                 
            BrowserModule,
            FormsModule,
            HttpModule,
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
```
##Router Links
* ***app.component.html*** holds **Title** and **Link to Home** as part of each component, and the **router-outlet** as spaceholder for the selected component:
```angular2html
    <a href="home">Home</a>
    <h1>MyApp</h1>
    <router-outlet></router-outlet>
```
* ***home.component.html*** holds the top navigation:
```angular2html
    <h1>Welcome Home!</h1>
    <strong>Here are your choises:</strong>
    <ul>
        <li><a href="home">Home</a></li>
        <li><a href="hello">Hello World App</a></li>
    </ul>
```