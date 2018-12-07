import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailviewComponent } from './detailview/detailview.component';
import {AuthorComponent} from './author/author.component';

const routes: Routes = [
  { path: 'book', component: BookComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'detailview/:id', component: DetailviewComponent },
{ path: 'homepage', redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
