import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books : any = [];
  selectedIndex: number;
  activarRespuesta : boolean;

  constructor(private rest : RestService) { 
    this.selectedIndex = 0;
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.books = [];
    this.rest.getBooks().subscribe((data: {}) => {
      console.log(data);
      this.books = data;
    });
  }

  next(){
    if(this.selectedIndex <= 4){
      ++this.selectedIndex;
      this.activarRespuesta = false;
   }else{
    this.selectedIndex = 0;
   }
  }

  previous(){
    if(this.selectedIndex >= 0 && this.selectedIndex <= 4){
     --this.selectedIndex;
     this.activarRespuesta = false;
    }
  }

  onRespuesta(respuesta : any){
    if(respuesta != null){
      if(respuesta.correcta == true){
        respuesta.respondio = true;
      }else{
        respuesta.respondio = false;
      }
      this.activarRespuesta = true;
    }
  }

}
