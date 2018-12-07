import { Component, OnInit, Input} from '@angular/core'; //, Input
import { Books } from '../books';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';
import { BOOKS } from '../mock-books';
import { Author } from '../author';
import {GetbooksService} from '../getbooks.service';


@Component({
  selector: 'app-buildlistview',
  templateUrl: './buildlistview.component.html',
  styleUrls: ['./buildlistview.component.scss']
})
export class BuildlistviewComponent implements OnInit {
@Input() author: Author;
  selectedAuthor: Author;
  constructor(

    private bookService: BookService,
    private location: Location,
private route: ActivatedRoute,
private GetbooksService: GetbooksService

  ) { }

  ngOnInit() {
    this.getAuthor();
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
