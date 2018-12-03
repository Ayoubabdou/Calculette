import { Component, OnInit } from '@angular/core';
import {DonneesService} from '../services/donnees.service';
@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {

  textEcran;
  nombre1 = 0;
  nombre2 = 0;
  operation = "";
  constructor() { }

  ngOnInit() {
  }
  ecrireNombre(nombre:any){

    if (this.operation == "") {
        this.nombre1 += nombre.target.value;
        this.textEcran = this.nombre1;
    }   else{
      this.nombre2 += nombre.target.value;
      this.textEcran = this.nombre2;
    }

  }

   operations(oper:any){
    this.operation = oper.target.value;
    this.textEcran.value = "";
}

 calculer() {

   var result;
    switch(this.operation){
      case '+':
      if (this.operation === "+"){
      result = Number(this.nombre1) + Number(this.nombre2);
      this.textEcran = result;
      this.nombre1 = result;
      this.nombre2 = 0 ;
      this.operation = "";
      }
      break;

      case '-':
      result = (this.nombre1) - (this.nombre2);
      this.textEcran = result;
      this.nombre1 = result;
      this.nombre2 = 0 ;
      this.operation = "";
      break;

      case 'x':
      result = Number(this.nombre1) * Number(this.nombre2);
      this.textEcran = result;
      this.nombre1 = result;
      this.nombre2 = 0 ;
      this.operation = "";
      break;

      case '÷':
      result = Number(this.nombre1) / Number(this.nombre2);
      this.textEcran = result;
      this.nombre1 = result;
      this.nombre2 = 0 ;
      this.operation = "";
      break;

    }
 

  }

effacer() {
  //alert('ok');
  this.nombre1 = 0;
  this.nombre2 = 0;
  this.operation = "";
  this.textEcran = "";
}


}
