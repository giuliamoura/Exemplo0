import { BitcoinsComponent } from './bitcoins.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        BitcoinsComponent,
    ],
    imports: [
        FormsModule, 
        ReactiveFormsModule, 
        CommonModule,
    ],
    exports: [
        BitcoinsComponent,
    ]
})

export class BitcoinsModule { }