import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Books[];
selectedBook: Books;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  onSelect(book:Books): void{
    this.selectedBook = book;

  }

  //getBooks(): void {
   // this.bookService.getBooks()
   // .subscribe( books => this.books = books);
//}

}
