import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, AbstractControl, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-bitcoins',
  templateUrl: './bitcoins.component.html',
  styleUrls: ['./bitcoins.component.css']
})
export class BitcoinsComponent implements OnInit {
  sites = ['instA', 'instB', 'instC'];
  instA: number[] = [];
  instB: number[] = [];
  instC: number[] = [];
  data: number;
  bitcoinsForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.bitcoinsForm = fb.group({
      'instA': new FormArray([new FormControl(null, Validators.required), new FormControl(null, Validators.required), new FormControl(null, Validators.required)]),
      'instB': new FormArray([new FormControl(null, Validators.required), new FormControl(null, Validators.required), new FormControl(null, Validators.required)]),
      'instC': new FormArray([new FormControl(null, Validators.required), new FormControl(null, Validators.required), new FormControl(null, Validators.required)]),
    })
   }

  ngOnInit() {
  }

  addend(site: string) {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.bitcoinsForm.get(site)).push(control);
  }

  delend(i: number, site: string) { 
    (<FormArray>this.bitcoinsForm.get(site)).removeAt(i);
  }  
  
  onSubmit(value: any): void {
    for (const i of (<FormArray>this.bitcoinsForm.get('instA')).value) {
      this.instA.push(i);
    }
    for (const i of (<FormArray>this.bitcoinsForm.get('instB')).value) {
      this.instB.push(i);
    }
    for (const i of (<FormArray>this.bitcoinsForm.get('instC')).value) {
      this.instC.push(i);
    }
    this.calc();
  }

  calc(): void {
    let menor1: number = 0;
    let maior1: number = 100000;
    this.instA.sort();
    this.instB.sort();
    this.instC.sort();
    menor1 = this.instA[0];
    if (this.instB[this.instB.length-1] > menor1) {
      if (this.instB[0] < this.instB[this.instB.length-1]) {
        maior1 = this.instC[this.instC.length-1];
        this.data = maior1 - menor1;
      }
    }
  }


}
