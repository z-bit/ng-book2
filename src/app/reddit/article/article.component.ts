import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {class: 'row'}
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  ngOnInit() {}

  voteUp(): boolean {
    this.article.voteUp();
    return false; // avoids page refresh
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}

