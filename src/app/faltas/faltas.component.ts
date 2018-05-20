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
  selector: 'app-faltas',
  templateUrl: './faltas.component.html',
  styleUrls: ['./faltas.component.css']
})
export class FaltasComponent implements OnInit {
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

  calcnotas(texto: any): any {
    let total = 15 * Number(texto[1]);
    let Qa = Number(texto[0]);
    let Fa = Number(texto[2]);
    let fpossiveis = (total)*0.3;
    this.data = fpossiveis - Fa; 
    if (this.data < 0) {
      this.data = "Bombou"
    } 
    return this.data;
  }

  expect(text: any): boolean {
    let texto: string[] = [];
    let aux = String(text);
    texto = aux.split(' ');
    if (texto.length == 3 && texto[texto.length-1] != "") {
      this.calcnotas(texto);
      return true
    } else {
      return false;
    }
  }

}
