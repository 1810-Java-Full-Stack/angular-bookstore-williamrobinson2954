import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  books: Books[] = [];
errorMsg: String = '';


  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);// = books.slice(1, 5));
}

}
