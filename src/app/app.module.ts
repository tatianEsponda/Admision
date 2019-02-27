import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './components/books/books.component';
import { RestService } from './service/rest.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContextoComponent } from './components/dashboard/contexto/contexto.component';
import { PreguntaComponent } from './components/dashboard/pregunta/pregunta.component';
import { RespuestaComponent } from './components/dashboard/respuesta/respuesta.component';
import { PrincipalComponent } from './components/dashboard/principal/principal.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    DashboardComponent,
    ContextoComponent,
    PreguntaComponent,
    RespuestaComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RestService],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
