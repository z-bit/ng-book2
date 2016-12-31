import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';


@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['../../assets/css/semantic.min.css']
})
export class RedditComponent implements OnInit {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
  }

   ngOnInit() {}

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article ${title.value} with link ${link.value}.`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort(
        (a: Article, b: Article) => b.votes - a.votes
    );
  }

}
