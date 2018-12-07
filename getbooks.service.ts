import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Author } from './author';
import { author } from './mock-authors';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class GetbooksService {

  constructor(private messageService: MessageService) { }

  getAuthors(): Observable<Author[]> {
    this.messageService.add('BookService: fetched heroes');
    return of(author);
  }

  getAuthor(name: String): Observable<Author> {
    this.messageService.add(`Fetching Hero ${name}`);
    return of(author.find(Author => Author.name === name));
}
}
