import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : any = [];

  constructor() { }

  ngOnInit() {
    this.books = {
      nombre : 'Tatiana Andrea Esponda',
      correo : 'tatianaesponda22@gmail.com',
      telefono : '312 671 6204'
    }
    console.log("books :" + this.books);
  }


}
