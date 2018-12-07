import { Component, OnInit } from '@angular/core';
import { Author} from '../author';
import { author } from '../mock-authors';
import { GetbooksService } from '../getbooks.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
AUTHORS = author;
  author: Author[];
  selectedAuthor: Author;
  
    constructor(private getbookService: GetbooksService) { }

  ngOnInit() {
  }

  onSelect(author:Author): void{
    this.selectedAuthor = author;

  }

 getAuthors(): void {
    this.getbookService.getAuthors()
    .subscribe( author => this.author = author);
}




}
