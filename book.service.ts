import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Books } from './books';
import { BOOKS } from './mock-books';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private messageService: MessageService) { }

  getBooks(): Observable<Books[]> {
    this.messageService.add('BookService: fetched heroes');
    return of(BOOKS);
  }

  getBook(id: number): Observable<Books> {
    this.messageService.add(`Fetching Hero ${id}`);
    return of(BOOKS.find(books => books.id === id));
}

 // getBook(id: number): Observable<Book> {
   // this.MessageService.add(`Fetching Hero ${id}`);
    //return of(Books.find(hero => Books.id === id));
//}



}


