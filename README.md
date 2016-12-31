# NgBook2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24. by typing ***ng new ng-book2***

* **Original [README.md](./docu/README.md) from** ***angular-cli***
* check out the [TODO-list](./docu/todos.md)


* npm install --save semantic-ui-css
* copy ***node_modules/semantic-iu-css/semantic.css*** to ***src/semantic.css***
* add ***```<link rel="stylesheet" href="./semantic.css">```*** to src/index.html
    * above approach failt when it came to display icons
    * they need a themes folder
    * so I copied these files from the book's xcode to /src/assets/css
    * and amended the link in **src/index.html** to ***```<link rel="stylesheet" href="./assets/css/semantic.min.css">```***
    * see [TODO-list](./docu/todos.md) for improving usage of semantic-ui
* ng generate component home ...(and all the components you can think of)
* [Define basic routing](./docu/routing.md)

 