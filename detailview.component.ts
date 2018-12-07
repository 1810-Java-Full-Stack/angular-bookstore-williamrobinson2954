import { Component, OnInit} from '@angular/core'; //, Input
import { Books } from '../books';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';
import { BOOKS } from '../mock-books';
import { Author } from '../author';
import {GetbooksService} from '../getbooks.service';


@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {
 // @Input()book:Books;

  selectedBook: Books;
  selectedAuthor: Author;
  constructor(
    private bookService: BookService,
    private location: Location,
private route: ActivatedRoute,
private GetbooksService: GetbooksService

  ) { }

  ngOnInit() {
    this.getBook();
    this.getAuthor();
  }

  getBook() {
    let id = +this.route.snapshot.paramMap.get('id');
   // this.location.go('/detailview/'+id);
    this.bookService.getBook(id).subscribe(
      book => this.selectedBook = book
    );
  }

  getAuthor() {
    let name = +this.route.snapshot.paramMap.get('name');
   // this.location.go('/detailview/'+id);
    this.GetbooksService.getAuthor(name.toString()).subscribe(
      author => this.selectedAuthor = author
    );
  }


  goBack() {
    this.location.back();
}

}
