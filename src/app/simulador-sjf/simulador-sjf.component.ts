import { Component, OnInit } from '@angular/core';
import { proceso } from './proceso';

@Component({
  selector: 'app-simulador-sjf',
  templateUrl: './simulador-sjf.component.html',
  styleUrls: ['./simulador-sjf.component.scss']
})
export class SimuladorSJFComponent implements OnInit {
  public procesos: Array<proceso> = [];
  procesoNombre: string;
  rafagaCPU: number;
  tLlegada: number;
  prioridad: number;
  retornoAux: number;
  tRetorno: number;
  tEspera: number;
  quantum: number;
  

  procesosAux: Array<proceso> = [];


  aux: Boolean = true;
  constructor() {
  }

  ngOnInit(): void { }


  addProceso() {
    if (this.procesoNombre != '' && this.rafagaCPU != 0) {

      let procesoAux = new proceso();
      procesoAux.procesoNombre = this.procesoNombre.toUpperCase();
      procesoAux.rafagaCPU = this.rafagaCPU;
      procesoAux.prioridad = this.prioridad;
      procesoAux.tLlegada = this.tLlegada;
      console.log(procesoAux.procesoNombre);
      this.procesos.push(procesoAux);
      this.procesoNombre = '';
      this.rafagaCPU = 0;
      this.tLlegada = 0;
      this.prioridad = 0;
      this.tRetorno = 0;
      this.tEspera = 0;
    } else {
      this.aux = false;
      console.log('Faltan Datos');
    }
  }
  listarProcesos() {
    for (let index = 0; index < this.procesos.length; index++) {
      console.log('Nombre: ' + this.procesos[index].procesoNombre);
    }
  }
  ordenarProcesosTiempo() {
    /*this.procesosAux = this.procesos;
    this.procesosAux.sort((a, b) => a.rafagaCPU < b.rafagaCPU ? -1 : a.rafagaCPU > b.rafagaCPU ? 1: a.tLlegada <b.tLlegada ? -1 : a.tLlegada > b.tLlegada ? 1 : 0);*/
    for (let index = 0; index < this.procesos.length; index++) {
      let temp: proceso;
      if (this.procesos[index].tLlegada < this.procesos[0].tLlegada) {
        temp = this.procesos[0];
        this.procesos[0] = this.procesos[index];
        this.procesos[index] = temp;
      }
      this.procesos[index].tRetorno = 0;
      this.procesos[index].tEspera = 0;
    }
    for (let index = 0; index < this.procesos.length; index++) {
      let temp: proceso;
      if (this.procesos[index].tLlegada == this.procesos[0].tLlegada && this.procesos[index].rafagaCPU < this.procesos[0].rafagaCPU) {
        temp = this.procesos[0];
        this.procesos[0] = this.procesos[index];
        this.procesos[index] = temp;
      }
      this.procesos[index].tRetorno = 0;
      this.procesos[index].tEspera = 0;
    }
    this.procesos[0].tRetorno = this.procesos[0].tLlegada + this.procesos[0].rafagaCPU;
    this.procesos[0].tEspera = (this.procesos[0].tRetorno - this.procesos[0].rafagaCPU) - this.procesos[0].tLlegada;
    this.retornoAux = this.procesos[0].tLlegada;
    this.procesos[0].tRespuestaAux = this.retornoAux;
    for (let i = 1; i < this.procesos.length; i++) {
      let temp: proceso;
      for (let j = 1; j < this.procesos.length - 1; j++) {
        if (this.procesos[i].rafagaCPU < this.procesos[j].rafagaCPU) {
          temp = this.procesos[i];
          this.procesos[i] = this.procesos[j];
          this.procesos[j] = temp;
        }

      }
      for (let index = 1; index < this.procesos.length; index++) {
        this.procesos[index].tRetorno = this.procesos[index - 1].tRetorno + this.procesos[index].rafagaCPU;
      }
    }

    for (let index = 1; index < this.procesos.length; index++) {
      this.procesos[index].tRespuestaAux = this.procesos[index].tRetorno - this.procesos[index].rafagaCPU;

    }
    for (let index = 1; index < this.procesos.length; index++) {
      this.procesos[index].tEspera = (this.procesos[index].tRetorno - this.procesos[index].rafagaCPU) - this.procesos[index].tLlegada;

    }

    for (let index = 0; index < this.procesos.length; index++) {
      console.log(this.procesos[index]);
    }
  }
  

}
