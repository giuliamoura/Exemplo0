import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  data: any;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    Observable
    .fromEvent(this.el.nativeElement, "keyup")
    .map((e: any) => e.target.value)
    .filter((text: string) => this.expect(text))
    .switch()
    .subscribe((text: string) => {
      //this.data = this.calcnotas(text)
    })
  }

  expect(text: any): boolean {
    let texto: string[] = [];
    let aux = String(text);
    texto = aux.split(' ');
    if (texto.length == 8 && texto[texto.length-1] != "") {
      this.calcnotas(texto);
      return true
    } else {
      return false;
    }
  }

  calcnotas(texto: any): any {
    let pp = Number(texto[0]);
    let pt = Number(texto[1]); 
    let qp = Number(texto[2]);
    let qt = Number(texto[3]); 
    let pr: number[] = [];
    let tr: number[] = [];
    for (let i = 0; i < qp; i++) {
      pr[i] = Number(texto[4+i]);
    }
    for (let j = 0; j < qp; j++) {
      tr[j] = Number(texto[4+qp+j]);
    }
    this.data = this.soma(pr)*pp/qp + this.soma(tr)*pt/qt
  }
  soma(n: number[]): number {
    let aux: number = 0;
    n.forEach(element => {
      aux += element
    });
    console.log(aux);
    return aux
  }

}
